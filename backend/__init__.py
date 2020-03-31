from liberouterapi import config
from liberouterapi.dbConnector import dbConnector
from liberouterapi.modules.module import Module

if 'netconf' not in config.config.sections():
    config.load(path=__path__[0] + '/config.ini')
    conf_path = config['netconf']


netconf_bp = Module('netconf', __name__, url_prefix='/netconf', no_version=True)

#netconf_bp.add_url_rule('/inventory/schemas', view_func = schemas_list, methods = ['GET'])


