process.env.HOT_SERVER_HOST = process.env.HOT_SERVER_HOST || 'localhost';
process.env.HOT_SERVER_PORT = process.env.HOT_SERVER_PORT || '8080';
process.env.HOT_SERVER = process.env.HOT_SERVER || `http://${process.env.HOT_SERVER_HOST}:${process.env.HOT_SERVER_PORT}`;
process.env.SERVER_HOST = process.env.SERVER_HOST || 'localhost';
process.env.SERVER_PORT = process.env.SERVER_PORT || '3000';

process.env.COMPONENT_SERVER_HOST = process.env.COMPONENT_SERVER_HOST || 'localhost';
process.env.COMPONENT_SERVER_PORT = process.env.COMPONENT_SERVER_PORT || '8081';
process.env.COMPONENT_SERVER = process.env.COMPONENT_SERVER || `http://${process.env.COMPONENT_SERVER_HOST}:${process.env.COMPONENT_SERVER_PORT}`;
process.env.ROOT_COMPONENT = process.env.ROOT_COMPONENT || `${process.env.COMPONENT_SERVER}/index.js`;

