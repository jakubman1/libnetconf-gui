from liberouterapi import config
from liberouterapi.dbConnector import dbConnector
from liberouterapi.modules.module import Module

if 'netconf' not in config.config.sections():
    config.load(path=__path__[0] + '/config.ini')
    conf_path = config['netconf']

from .connections import *

netconf_bp = Module('netconf', __name__, url_prefix='/netconf', no_version=True)

# Devices
netconf_bp.add_url_rule('/devices', view_func=devices_get, methods=['GET'])

# Profiles
netconf_bp.add_url_rule('/activateProfile', view_func=activate_profile, methods=['POST'])
netconf_bp.add_url_rule('/profiles', view_func=profiles, methods=['GET'])
netconf_bp.add_url_rule('/profile/<profile_name>', view_func=profile_get, methods=['GET'])
netconf_bp.add_url_rule('/removeProfile', view_func=profile_remove, methods=['POST'])
netconf_bp.add_url_rule('/profileOnLogin', view_func=profile_on_login, methods=['GET'])
netconf_bp.add_url_rule('/profile', view_func=profile_add, methods=['POST'])
netconf_bp.add_url_rule('/profile/<profile_name>', view_func=profile_set, methods=['POST'])
