#!/usr/bin/python3

import pymongo
import unittest

from devices import *

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
    def setUpClass():
        # TODO: Create a test JSON file
        pass

    @staticmethod
    def tearDownClass():
        # TODO: Remove a test JSON file
        pass

if __name__ == "__main__":
    unittest.main()