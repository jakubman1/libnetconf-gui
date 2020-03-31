from liberouterapi import config
from liberouterapi.dbConnector import dbConnector
from liberouterapi.modules.module import Module
from .connections import *

if 'netconf' not in config.config.sections():
    config.load(path=__path__[0] + '/config.ini')
    conf_path = config['netconf']


netconf_bp = Module('netconf', __name__, url_prefix='/netconf', no_version=True)

netconf_bp.add_url_rule('/profiles', view_func=profiles, methods=['GET'])
netconf_bp.add_url_rule('/profile/<profile_name>', view_func=profile_get, methods=['GET'])
netconf_bp.add_url_rule('/profile', view_func=profile_add, methods=['POST'])
netconf_bp.add_url_rule('/profile/<profile_name>', view_func=profile_set, methods=['POST'])
