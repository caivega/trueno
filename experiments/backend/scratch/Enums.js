"use strict";

/**
 * @author ebarsallo
 * This module decription
 * @module path/moduleFileName
 * @see module:path/referencedModuleName
 */

/** Description of the class */
function Enums()  {

  this.Components = {
    GENERAL: '_general',
    GRAPH:  '_graph',
    VERTEX: '_vertex',
    sEDGE:   '_edge'
  };

  this.Operations = {
    USE:   'use',
    CLEAR: 'clear',
    CREATE: 'create',
    CREATE_GRAPH_TABLE:  'create_graph_table',
    CREATE_VERTEX_TABLE: 'create_vertex_table',
    CREATE_EDGE_TABLE:   'create_edge_table',

    IMPORT: 'import',

    DELETE: 'delete',
    INSERT: 'insert',
    SELECT: 'select',
    UPDATE: 'update',
    LIST:   'list',
    LIST_NEIGHBORS: 'neighbors'
  };
}


/* exporting the module */
module.exports = Object.freeze(new Enums());
