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


if __name__ == "__main__":
    unittest.main()