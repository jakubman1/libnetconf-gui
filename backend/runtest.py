#!/usr/bin/python3

import pymongo
import unittest
import os

from profiles import *

dbClient = pymongo.MongoClient("mongodb://localhost:27017/")
testDb = dbClient["testDb"]
testCol = testDb["tests"]

class TestDeviceConnection(unittest.TestCase):
    """
    Test connecting to devices and disconnecting from them
    """

    @staticmethod
    def setUpClass():
        # TODO: Set up a device to connect to
        pass

    @staticmethod
    def tearDownClass():
        testCol.deleteMany({})


class TestProfiles(unittest.TestCase):
    """
    Test manipulating profiles
    """

    @staticmethod
    def tearDownClass():
       os.remove('userfiles/__test_user__.json')

    def test_data_init(self):
        self.assertEqual(read_user_profiles('__test_user__'), {'active': 'default','profiles': [{'name':'default'}]})

    def test_data_write(self):
        self.assertFalse(write_user_profiles('__test_user__', {}))
        self.assertTrue(write_user_profiles('__test_user__', {'active': 'default','profiles': [{'name':'default'}, {'name': 'test'}]}))
        self.assertTrue(write_user_profiles('__test_user__', {'active': 'default','profiles': [{'name':'default',}]}))

    def test_set_remove_and_get(self):
        self.assertEqual(get_profile_names('__test_user__'), ['default'])
        self.assertTrue(add_profile('__test_user__', 'test_profile'))
        self.assertEqual(get_profile_names('__test_user__'), ['default', 'test_profile'])
        self.assertTrue(remove_profile('__test_user__', 'default'))
        self.assertEqual(get_profile_names('__test_user__'), ['test_profile'])
        self.assertFalse(remove_profile('__test_user__', 'default'))
        write_user_profiles('__test_user__', {'active': 'default','profiles': [{'name':'default'}]}) # Back to initial state


    def test_active_profile(self):
        self.assertEqual(get_active_profile('__test_user__'), 'default')
        self.assertTrue(add_profile('__test_user__', 'test_profile'))
        self.assertTrue(set_active_profile('__test_user__', 'test_profile'))
        self.assertFalse(set_active_profile('__test_user__', 'nonexistent_profile'))
        self.assertEqual(get_active_profile('__test_user__'), 'test_profile')
        self.assertTrue(remove_profile('__test_user__', 'test_profile'))
        self.assertEqual(get_active_profile('__test_user__'), '')
        self.assertTrue(set_active_profile('__test_user__', 'default'))



if __name__ == "__main__":
    unittest.main()