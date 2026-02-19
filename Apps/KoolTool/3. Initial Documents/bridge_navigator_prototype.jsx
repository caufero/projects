import React, { useState, useEffect } from 'react';

// ═══════════════════════════════════════════════════════════════════
// THE BRIDGE - UNIVERSAL NAVIGATOR PROTOTYPE
// Implementing 30 Years of Ontological Research
// ═══════════════════════════════════════════════════════════════════

// ───────────────────────────────────────────────────────────────────
// MATRIX 56×56 DATA (Subset Funzionale)
// ───────────────────────────────────────────────────────────────────

const MATRIX_56x56 = {
  // Meta-attributes (MET001-MET010 core)
  meta_attributes: {
    MET001: { id: 'MET001', name: 'entity_id', domain: 'IDENTITY', data_type: 'TEXT' },
    MET002: { id: 'MET002', name: 'entity_type', domain: 'IDENTITY', data_type: 'TEXT' },
    MET003: { id: 'MET003', name: 'name', domain: 'IDENTITY', data_type: 'TEXT' },
    MET004: { id: 'MET004', name: 'parent_dna', domain: 'IDENTITY', data_type: 'TEXT' },
    MET005: { id: 'MET005', name: 'data_type', domain: 'MATERIAL', data_type: 'ENUM' },
    MET006: { id: 'MET006', name: 'gui_widget', domain: 'MATERIAL', data_type: 'ENUM' },
    MET007: { id: 'MET007', name: 'required', domain: 'MATERIAL', data_type: 'BOOLEAN' },
    MET008: { id: 'MET008', name: 'default_value', domain: 'MATERIAL', data_type: 'TEXT' },
    MET009: { id: 'MET009', name: 'validation_rule', domain: 'SECURITY', data_type: 'TEXT' },
    MET010: { id: 'MET010', name: 'domain', domain: 'IDENTITY', data_type: 'ENUM' }
  },
  
  // Operations (OPE001-OPE010 core)
  operations: {
    OPE001: {
      id: 'OPE001',
      name: 'COMPOSE',
      description: 'Create new entity',
      behavior_codes: {
        MET001: 'W:GEN', // Generate ID
        MET002: 'W:SET', // Set type
        MET003: 'W:SET', // Set name
        MET004: 'W:REL', // Set parent
        MET005: 'W:SET', // Set data_type
        MET006: 'W:SET', // Set widget
        MET007: 'W:SET', // Set required
        MET010: 'W:SET'  // Set domain
      }
    },
    OPE002: {
      id: 'OPE002',
      name: 'READ',
      description: 'Read entity attributes',
      behavior_codes: {
        MET001: 'R:SIMP',
        MET002: 'R:SIMP',
        MET003: 'R:SIMP',
        MET005: 'R:SIMP',
        MET006: 'R:SIMP',
        MET007: 'R:SIMP',
        MET010: 'R:SIMP'
      }
    },
    OPE003: {
      id: 'OPE003',
      name: 'UPDATE',
      description: 'Update entity attributes',
      behavior_codes: {
        MET003: 'W:SET',
        MET005: 'W:SET',
        MET006: 'W:SET',
        MET007: 'W:SET',
        MET008: 'W:SET'
      }
    },
    OPE005: {
      id: 'OPE005',
      name: 'QUERY',
      description: 'Query multiple entities',
      behavior_codes: {
        MET002: 'R:FILT', // Filter by type
        MET005: 'R:FILT', // Filter by data_type
        MET010: 'R:FILT'  // Filter by domain
      }
    }
  }
};

// ───────────────────────────────────────────────────────────────────
// ENTITY SPACE - 3D Data Structure
// ───────────────────────────────────────────────────────────────────

class EntitySpace {
  constructor() {
    this.layers = {
      0: { name: 'META', entities: {} },      // Definitions
      1: { name: 'MODEL', entities: {} },     // Templates
      2: { name: 'INSTANCE', entities: {} }   // Concrete data
    };
    this.current_position = { x: 'name', y: null, z: 0 };
    this.entity_counter = 0;
  }

  generateEntityId(type) {
    this.entity_counter++;
    return `${type}${String(this.entity_counter).padStart(3, '0')}`;
  }

  addEntity(layer, entity) {
    this.layers[layer].entities[entity.entity_id] = entity;
  }

  getEntity(layer, entity_id) {
    return this.layers[layer].entities[entity_id];
  }

  getEntitiesByType(layer, type) {
    return Object.values(this.layers[layer].entities).filter(
      e => e.entity_type === type
    );
  }

  getAllEntities(layer) {
    return Object.values(this.layers[layer].entities);
  }
}

// ───────────────────────────────────────────────────────────────────
// BRIDGE NAVIGATOR - Core Implementation
// ───────────────────────────────────────────────────────────────────

class BridgeNavigator {
  constructor() {
    this.entity_space = new EntitySpace();
    this.position = { x: 'name', y: null, z: 0 };
    this.logs = [];
    this.initializeMetaLayer();
  }

  initializeMetaLayer() {
    // Create ATR_META entity
    const atr_meta = {
      entity_id: 'ATR_META',
      entity_type: 'ATR',
      name: 'ATR_META',
      parent_dna: 'PRSYS',
      meta_attributes: Object.keys(MATRIX_56x56.meta_attributes)
    };
    this.entity_space.addEntity(0, atr_meta);
    this.log('INIT', 'Meta layer initialized with ATR_META');
  }

  log(type, message, data = null) {
    this.logs.push({
      timestamp: new Date().toISOString(),
      type,
      message,
      data,
      position: { ...this.position }
    });
  }

  // ═══════════════════════════════════════════════════════════════
  // NAVIGATOR 1: Navigate_X (Move along attributes - X axis)
  // ═══════════════════════════════════════════════════════════════
  
  Navigate_X(target, mode = 'direct') {
    const old_x = this.position.x;
    
    if (mode === 'direct') {
      this.position.x = target;
      this.log('NAV_X', `Moved from ${old_x} to ${target}`, {
        mode,
        from: old_x,
        to: target
      });
      return { success: true, new_position: this.position };
    }
    
    if (mode === 'next' || mode === 'prev') {
      const attributes = Object.keys(MATRIX_56x56.meta_attributes);
      const current_index = attributes.findIndex(attr => 
        MATRIX_56x56.meta_attributes[attr].name === this.position.x
      );
      
      let new_index = mode === 'next' 
        ? (current_index + 1) % attributes.length
        : (current_index - 1 + attributes.length) % attributes.length;
      
      const new_attr = MATRIX_56x56.meta_attributes[attributes[new_index]].name;
      this.position.x = new_attr;
      
      this.log('NAV_X', `${mode}: ${old_x} → ${new_attr}`, {
        mode,
        from: old_x,
        to: new_attr
      });
      return { success: true, new_position: this.position };
    }
    
    return { success: false, error: 'Invalid mode' };
  }

  // ═══════════════════════════════════════════════════════════════
  // NAVIGATOR 2: Navigate_Y (Move along entities - Y axis)
  // ═══════════════════════════════════════════════════════════════
  
  Navigate_Y(target, mode = 'specific', count = 1) {
    const old_y = this.position.y;
    
    if (mode === 'specific') {
      this.position.y = target;
      this.log('NAV_Y', `Moved to entity ${target}`, {
        mode,
        from: old_y,
        to: target
      });
      return { success: true, new_position: this.position };
    }
    
    if (mode === 'TYPE') {
      const entities = this.entity_space.getEntitiesByType(this.position.z, target);
      this.log('NAV_Y', `Query entities of type ${target}`, {
        mode,
        type: target,
        count: entities.length,
        entities: entities.slice(0, count)
      });
      return { success: true, entities: entities.slice(0, count) };
    }
    
    if (mode === 'new') {
      const new_id = this.entity_space.generateEntityId(target);
      this.position.y = new_id;
      this.log('NAV_Y', `Created slot for new entity ${new_id}`, {
        mode,
        entity_id: new_id,
        type: target
      });
      return { success: true, entity_id: new_id, new_position: this.position };
    }
    
    return { success: false, error: 'Invalid mode' };
  }

  // ═══════════════════════════════════════════════════════════════
  // NAVIGATOR 3: Navigate_Z (Move along layers - Z axis)
  // ═══════════════════════════════════════════════════════════════
  
  Navigate_Z(target, direction = 'direct') {
    const old_z = this.position.z;
    
    if (direction === 'direct') {
      if (target >= 0 && target <= 2) {
        this.position.z = target;
        this.log('NAV_Z', `Moved from layer ${old_z} to layer ${target}`, {
          direction,
          from: old_z,
          to: target,
          layer_name: this.entity_space.layers[target].name
        });
        return { success: true, new_position: this.position };
      }
    }
    
    if (direction === 'up') {
      const new_z = Math.max(0, this.position.z - 1);
      this.position.z = new_z;
      this.log('NAV_Z', `Moved up from layer ${old_z} to ${new_z}`, {
        direction,
        from: old_z,
        to: new_z
      });
      return { success: true, new_position: this.position };
    }
    
    if (direction === 'down') {
      const new_z = Math.min(2, this.position.z + 1);
      this.position.z = new_z;
      this.log('NAV_Z', `Moved down from layer ${old_z} to ${new_z}`, {
        direction,
        from: old_z,
        to: new_z
      });
      return { success: true, new_position: this.position };
    }
    
    return { success: false, error: 'Invalid direction' };
  }

  // ═══════════════════════════════════════════════════════════════
  // NAVIGATOR 4: Universal_Processor (Execute operations via matrix)
  // ═══════════════════════════════════════════════════════════════
  
  Universal_Processor(operation_id, params) {
    const operation = MATRIX_56x56.operations[operation_id];
    
    if (!operation) {
      this.log('ERROR', `Operation ${operation_id} not found`);
      return { success: false, error: 'Operation not found' };
    }
    
    this.log('MATRIX', `Consulting matrix for operation ${operation.name}`, {
      operation_id,
      operation_name: operation.name
    });
    
    // OPE001: COMPOSE - Create new entity
    if (operation_id === 'OPE001') {
      const entity_id = this.entity_space.generateEntityId(params.entity_type || 'ATR');
      
      const new_entity = {
        entity_id,
        entity_type: params.entity_type || 'ATR',
        name: params.name || 'unnamed',
        parent_dna: params.parent_dna || 'PRMOD',
        data_type: params.data_type || 'TEXT',
        gui_widget: params.gui_widget || 'TEXTFIELD',
        required: params.required !== undefined ? params.required : false,
        domain: params.domain || 'MATERIAL',
        created_at: new Date().toISOString()
      };
      
      this.entity_space.addEntity(this.position.z, new_entity);
      this.position.y = entity_id;
      
      this.log('EXEC', `OPE001:COMPOSE executed - Entity ${entity_id} created`, {
        operation: operation.name,
        entity: new_entity,
        behavior_codes_used: operation.behavior_codes
      });
      
      return { success: true, entity: new_entity };
    }
    
    // OPE002: READ - Read entity
    if (operation_id === 'OPE002') {
      const entity = this.entity_space.getEntity(this.position.z, this.position.y);
      
      if (!entity) {
        return { success: false, error: 'Entity not found' };
      }
      
      this.log('EXEC', `OPE002:READ executed - Read entity ${this.position.y}`, {
        operation: operation.name,
        entity
      });
      
      return { success: true, entity };
    }
    
    // OPE003: UPDATE - Update entity
    if (operation_id === 'OPE003') {
      const entity = this.entity_space.getEntity(this.position.z, this.position.y);
      
      if (!entity) {
        return { success: false, error: 'Entity not found' };
      }
      
      Object.keys(params).forEach(key => {
        if (operation.behavior_codes[key]) {
          entity[key] = params[key];
        }
      });
      
      entity.updated_at = new Date().toISOString();
      
      this.log('EXEC', `OPE003:UPDATE executed - Updated entity ${this.position.y}`, {
        operation: operation.name,
        updates: params,
        entity
      });
      
      return { success: true, entity };
    }
    
    // OPE005: QUERY - Query entities
    if (operation_id === 'OPE005') {
      let entities = this.entity_space.getAllEntities(this.position.z);
      
      // Apply filters
      if (params.entity_type) {
        entities = entities.filter(e => e.entity_type === params.entity_type);
      }
      if (params.data_type) {
        entities = entities.filter(e => e.data_type === params.data_type);
      }
      if (params.domain) {
        entities = entities.filter(e => e.domain === params.domain);
      }
      
      this.log('EXEC', `OPE005:QUERY executed - Found ${entities.length} entities`, {
        operation: operation.name,
        filters: params,
        count: entities.length
      });
      
      return { success: true, entities };
    }
    
    return { success: false, error: 'Operation not implemented' };
  }

  // ═══════════════════════════════════════════════════════════════
  // TEST SUITE
  // ═══════════════════════════════════════════════════════════════
  
  runTests() {
    const results = [];
    
    // TEST 001: Initialize Meta Layer
    results.push(this.test001_InitializeMetaLayer());
    
    // TEST 002: Compose New ATR
    results.push(this.test002_ComposeNewATR());
    
    // TEST 003: Navigate_X Between Attributes
    results.push(this.test003_NavigateX());
    
    // TEST 004: Navigate_Y Between Entities
    results.push(this.test004_NavigateY());
    
    // TEST 005: Navigate_Z Down to Instance
    results.push(this.test005_NavigateZDown());
    
    // TEST 006: Navigate_Z Up to Meta
    results.push(this.test006_NavigateZUp());
    
    // TEST 007: Query Multiple Entities
    results.push(this.test007_QueryEntities());
    
    // TEST 008: Cross-Layer Navigation
    results.push(this.test008_CrossLayerNav());
    
    // TEST 009: Matrix Consultation
    results.push(this.test009_MatrixConsultation());
    
    // TEST 010: Complete CRUD Cycle
    results.push(this.test010_CompleteCRUD());
    
    return results;
  }

  test001_InitializeMetaLayer() {
    const meta_entity = this.entity_space.getEntity(0, 'ATR_META');
    return {
      id: 'TEST_001',
      name: 'Initialize Meta Layer',
      passed: meta_entity !== undefined && meta_entity.entity_type === 'ATR',
      message: meta_entity ? 'ATR_META exists in layer 0' : 'Failed to find ATR_META'
    };
  }

  test002_ComposeNewATR() {
    const result = this.Universal_Processor('OPE001', {
      entity_type: 'ATR',
      name: 'test_attribute',
      data_type: 'TEXT',
      gui_widget: 'TEXTFIELD',
      required: true,
      domain: 'MATERIAL'
    });
    
    return {
      id: 'TEST_002',
      name: 'Compose New ATR',
      passed: result.success && result.entity.name === 'test_attribute',
      message: result.success ? `Entity ${result.entity.entity_id} created` : result.error
    };
  }

  test003_NavigateX() {
    this.position.x = 'name';
    const r1 = this.Navigate_X('data_type', 'direct');
    const r2 = this.Navigate_X('gui_widget', 'next');
    
    return {
      id: 'TEST_003',
      name: 'Navigate_X Between Attributes',
      passed: r1.success && r2.success,
      message: `Moved name → data_type → ${this.position.x}`
    };
  }

  test004_NavigateY() {
    const entities = this.entity_space.getAllEntities(0);
    if (entities.length < 2) return { 
      id: 'TEST_004', 
      name: 'Navigate_Y Between Entities',
      passed: false, 
      message: 'Not enough entities' 
    };
    
    const r1 = this.Navigate_Y(entities[0].entity_id, 'specific');
    const r2 = this.Navigate_Y(entities[1].entity_id, 'specific');
    
    return {
      id: 'TEST_004',
      name: 'Navigate_Y Between Entities',
      passed: r1.success && r2.success,
      message: `Navigated between ${entities[0].entity_id} and ${entities[1].entity_id}`
    };
  }

  test005_NavigateZDown() {
    this.position.z = 0;
    const r1 = this.Navigate_Z(1, 'down');
    const r2 = this.Navigate_Z(2, 'down');
    
    return {
      id: 'TEST_005',
      name: 'Navigate_Z Down to Instance',
      passed: r1.success && r2.success && this.position.z === 2,
      message: `Descended from META (0) → MODEL (1) → INSTANCE (2)`
    };
  }

  test006_NavigateZUp() {
    this.position.z = 2;
    const r1 = this.Navigate_Z(1, 'up');
    const r2 = this.Navigate_Z(0, 'up');
    
    return {
      id: 'TEST_006',
      name: 'Navigate_Z Up to Meta',
      passed: r1.success && r2.success && this.position.z === 0,
      message: `Ascended from INSTANCE (2) → MODEL (1) → META (0)`
    };
  }

  test007_QueryEntities() {
    const result = this.Universal_Processor('OPE005', {
      entity_type: 'ATR'
    });
    
    return {
      id: 'TEST_007',
      name: 'Query Multiple Entities',
      passed: result.success && result.entities.length > 0,
      message: `Found ${result.entities.length} ATR entities`
    };
  }

  test008_CrossLayerNav() {
    this.position = { x: 'name', y: 'ATR_META', z: 0 };
    const r1 = this.Navigate_X('data_type', 'direct');
    const r2 = this.Navigate_Z(1, 'down');
    
    return {
      id: 'TEST_008',
      name: 'Cross-Layer Navigation',
      passed: r1.success && r2.success && this.position.x === 'data_type' && this.position.z === 1,
      message: `Combined Navigate_X + Navigate_Z successfully`
    };
  }

  test009_MatrixConsultation() {
    const operation = MATRIX_56x56.operations['OPE001'];
    const has_behavior_codes = Object.keys(operation.behavior_codes).length > 0;
    
    return {
      id: 'TEST_009',
      name: 'Matrix Consultation',
      passed: has_behavior_codes,
      message: `Matrix has ${Object.keys(operation.behavior_codes).length} behavior codes for OPE001`
    };
  }

  test010_CompleteCRUD() {
    // CREATE
    const create = this.Universal_Processor('OPE001', {
      name: 'crud_test',
      data_type: 'TEXT'
    });
    
    if (!create.success) return {
      id: 'TEST_010',
      name: 'Complete CRUD Cycle',
      passed: false,
      message: 'CREATE failed'
    };
    
    const entity_id = create.entity.entity_id;
    
    // READ
    this.position.y = entity_id;
    const read = this.Universal_Processor('OPE002', {});
    
    // UPDATE
    const update = this.Universal_Processor('OPE003', {
      name: 'crud_test_updated'
    });
    
    // Verify
    const final = this.entity_space.getEntity(this.position.z, entity_id);
    
    return {
      id: 'TEST_010',
      name: 'Complete CRUD Cycle',
      passed: create.success && read.success && update.success && final.name === 'crud_test_updated',
      message: `CRUD cycle completed for entity ${entity_id}`
    };
  }
}

// ═══════════════════════════════════════════════════════════════════
// REACT COMPONENT - UI INTERFACE
// ═══════════════════════════════════════════════════════════════════

export default function BridgeNavigatorApp() {
  const [navigator, setNavigator] = useState(null);
  const [position, setPosition] = useState({ x: 'name', y: null, z: 0 });
  const [entities, setEntities] = useState([]);
  const [logs, setLogs] = useState([]);
  const [testResults, setTestResults] = useState([]);
  const [selectedEntity, setSelectedEntity] = useState(null);
  const [activeTab, setActiveTab] = useState('create');
  
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    data_type: 'TEXT',
    gui_widget: 'TEXTFIELD',
    required: true,
    domain: 'MATERIAL'
  });

  // Initialize navigator
  useEffect(() => {
    const nav = new BridgeNavigator();
    setNavigator(nav);
    setPosition(nav.position);
    updateEntities(nav);
    setLogs(nav.logs);
  }, []);

  const updateEntities = (nav) => {
    if (!nav) return;
    const currentEntities = nav.entity_space.getAllEntities(nav.position.z);
    setEntities(currentEntities);
  };

  const handleCreateATR = () => {
    if (!navigator) return;
    
    const result = navigator.Universal_Processor('OPE001', {
      entity_type: 'ATR',
      ...formData
    });
    
    if (result.success) {
      setPosition(navigator.position);
      updateEntities(navigator);
      setLogs([...navigator.logs]);
      setSelectedEntity(result.entity);
      
      // Reset form
      setFormData({
        name: '',
        data_type: 'TEXT',
        gui_widget: 'TEXTFIELD',
        required: true,
        domain: 'MATERIAL'
      });
    }
  };

  const handleNavigateX = (mode) => {
    if (!navigator) return;
    navigator.Navigate_X(null, mode);
    setPosition(navigator.position);
    setLogs([...navigator.logs]);
  };

  const handleNavigateY = (entity_id) => {
    if (!navigator) return;
    navigator.Navigate_Y(entity_id, 'specific');
    setPosition(navigator.position);
    setLogs([...navigator.logs]);
    const entity = navigator.entity_space.getEntity(navigator.position.z, entity_id);
    setSelectedEntity(entity);
  };

  const handleNavigateZ = (direction) => {
    if (!navigator) return;
    navigator.Navigate_Z(null, direction);
    setPosition(navigator.position);
    updateEntities(navigator);
    setLogs([...navigator.logs]);
  };

  const handleRunTests = () => {
    if (!navigator) return;
    const results = navigator.runTests();
    setTestResults(results);
    setLogs([...navigator.logs]);
    updateEntities(navigator);
    setActiveTab('tests');
  };

  const handleQueryATRs = () => {
    if (!navigator) return;
    const result = navigator.Universal_Processor('OPE005', {
      entity_type: 'ATR'
    });
    setLogs([...navigator.logs]);
  };

  if (!navigator) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-900 text-white">
        <div className="text-xl">Initializing THE BRIDGE Navigator...</div>
      </div>
    );
  }

  const passedTests = testResults.filter(t => t.passed).length;
  const totalTests = testResults.length;

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 p-6">
      {/* Header */}
      <div className="mb-6 border-b border-gray-700 pb-4">
        <h1 className="text-3xl font-bold text-blue-400 mb-2">
          🌉 THE BRIDGE - Universal Navigator Prototype
        </h1>
        <p className="text-gray-400">
          Validating 30 Years of Ontological Research • 4 Navigators • Matrix 56×56
        </p>
      </div>

      <div className="grid grid-cols-12 gap-4">
        {/* Left Column - Current Position & Controls */}
        <div className="col-span-3 space-y-4">
          {/* Current Position */}
          <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
            <h3 className="text-lg font-semibold mb-3 text-blue-300">🧭 Current Position</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-400">X (Attribute):</span>
                <span className="font-mono text-green-400">{position.x}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Y (Entity):</span>
                <span className="font-mono text-green-400">{position.y || 'null'}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Z (Layer):</span>
                <span className="font-mono text-green-400">
                  {position.z} - {navigator.entity_space.layers[position.z].name}
                </span>
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
            <h3 className="text-lg font-semibold mb-3 text-blue-300">🎮 Navigation</h3>
            
            {/* Navigate_X */}
            <div className="mb-3">
              <div className="text-xs text-gray-400 mb-1">Navigate_X (Attributes)</div>
              <div className="flex gap-2">
                <button
                  onClick={() => handleNavigateX('prev')}
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded text-sm"
                >
                  ← Prev
                </button>
                <button
                  onClick={() => handleNavigateX('next')}
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded text-sm"
                >
                  Next →
                </button>
              </div>
            </div>

            {/* Navigate_Z */}
            <div className="mb-3">
              <div className="text-xs text-gray-400 mb-1">Navigate_Z (Layers)</div>
              <div className="flex gap-2">
                <button
                  onClick={() => handleNavigateZ('up')}
                  className="flex-1 bg-purple-600 hover:bg-purple-700 text-white px-3 py-2 rounded text-sm"
                  disabled={position.z === 0}
                >
                  ↑ Up
                </button>
                <button
                  onClick={() => handleNavigateZ('down')}
                  className="flex-1 bg-purple-600 hover:bg-purple-700 text-white px-3 py-2 rounded text-sm"
                  disabled={position.z === 2}
                >
                  Down ↓
                </button>
              </div>
            </div>

            {/* Query */}
            <div>
              <button
                onClick={handleQueryATRs}
                className="w-full bg-green-600 hover:bg-green-700 text-white px-3 py-2 rounded text-sm"
              >
                🔍 Query All ATRs
              </button>
            </div>
          </div>

          {/* Test Runner */}
          <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
            <h3 className="text-lg font-semibold mb-3 text-blue-300">🧪 Test Suite</h3>
            <button
              onClick={handleRunTests}
              className="w-full bg-red-600 hover:bg-red-700 text-white px-4 py-3 rounded font-semibold"
            >
              ▶ Run All Tests
            </button>
            {testResults.length > 0 && (
              <div className="mt-3 text-center">
                <div className="text-2xl font-bold">
                  {passedTests === totalTests ? (
                    <span className="text-green-400">✅ {passedTests}/{totalTests}</span>
                  ) : (
                    <span className="text-yellow-400">⚠️ {passedTests}/{totalTests}</span>
                  )}
                </div>
                <div className="text-xs text-gray-400">Tests Passed</div>
              </div>
            )}
          </div>
        </div>

        {/* Middle Column - Entity Space Viewer & Main Content */}
        <div className="col-span-6 space-y-4">
          {/* Tabs */}
          <div className="bg-gray-800 rounded-lg border border-gray-700">
            <div className="flex border-b border-gray-700">
              <button
                onClick={() => setActiveTab('create')}
                className={`flex-1 px-4 py-3 font-semibold ${
                  activeTab === 'create'
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-400 hover:text-white hover:bg-gray-700'
                }`}
              >
                ➕ Create ATR
              </button>
              <button
                onClick={() => setActiveTab('entities')}
                className={`flex-1 px-4 py-3 font-semibold ${
                  activeTab === 'entities'
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-400 hover:text-white hover:bg-gray-700'
                }`}
              >
                📦 Entity Space
              </button>
              <button
                onClick={() => setActiveTab('tests')}
                className={`flex-1 px-4 py-3 font-semibold ${
                  activeTab === 'tests'
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-400 hover:text-white hover:bg-gray-700'
                }`}
              >
                ✓ Test Results
              </button>
            </div>

            <div className="p-6">
              {/* Create ATR Tab */}
              {activeTab === 'create' && (
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-blue-300 mb-4">
                    Create New Attribute (ATR)
                  </h3>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">
                      Attribute Name
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-gray-700 border border-gray-600 rounded px-3 py-2 text-white"
                      placeholder="e.g., phone_number, email_address"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">
                      Data Type
                    </label>
                    <select
                      value={formData.data_type}
                      onChange={(e) => setFormData({ ...formData, data_type: e.target.value })}
                      className="w-full bg-gray-700 border border-gray-600 rounded px-3 py-2 text-white"
                    >
                      <option value="TEXT">TEXT</option>
                      <option value="NUMBER">NUMBER</option>
                      <option value="DATE">DATE</option>
                      <option value="ENUM">ENUM</option>
                      <option value="BOOLEAN">BOOLEAN</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">
                      GUI Widget
                    </label>
                    <select
                      value={formData.gui_widget}
                      onChange={(e) => setFormData({ ...formData, gui_widget: e.target.value })}
                      className="w-full bg-gray-700 border border-gray-600 rounded px-3 py-2 text-white"
                    >
                      <option value="TEXTFIELD">TEXTFIELD</option>
                      <option value="TEXTAREA">TEXTAREA</option>
                      <option value="DROPDOWN">DROPDOWN</option>
                      <option value="DATEPICKER">DATEPICKER</option>
                      <option value="CHECKBOX">CHECKBOX</option>
                      <option value="RADIO">RADIO</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">
                      Domain
                    </label>
                    <select
                      value={formData.domain}
                      onChange={(e) => setFormData({ ...formData, domain: e.target.value })}
                      className="w-full bg-gray-700 border border-gray-600 rounded px-3 py-2 text-white"
                    >
                      <option value="IDENTITY">IDENTITY</option>
                      <option value="TEMPORAL">TEMPORAL</option>
                      <option value="MATERIAL">MATERIAL</option>
                      <option value="PERFORMANCE">PERFORMANCE</option>
                      <option value="SECURITY">SECURITY</option>
                    </select>
                  </div>

                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      checked={formData.required}
                      onChange={(e) => setFormData({ ...formData, required: e.target.checked })}
                      className="mr-2"
                    />
                    <label className="text-sm text-gray-300">Required Field</label>
                  </div>

                  <button
                    onClick={handleCreateATR}
                    disabled={!formData.name}
                    className="w-full bg-green-600 hover:bg-green-700 disabled:bg-gray-600 text-white px-4 py-3 rounded font-semibold text-lg"
                  >
                    🚀 Compose ATR
                  </button>

                  {selectedEntity && (
                    <div className="mt-4 bg-green-900 bg-opacity-30 border border-green-700 rounded p-4">
                      <div className="text-green-400 font-semibold mb-2">✅ Entity Created!</div>
                      <div className="text-sm text-gray-300">
                        <div>ID: {selectedEntity.entity_id}</div>
                        <div>Name: {selectedEntity.name}</div>
                        <div>Type: {selectedEntity.data_type}</div>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Entity Space Tab */}
              {activeTab === 'entities' && (
                <div>
                  <h3 className="text-xl font-semibold text-blue-300 mb-4">
                    Entity Space - Layer {position.z} ({navigator.entity_space.layers[position.z].name})
                  </h3>
                  
                  {entities.length === 0 ? (
                    <div className="text-center text-gray-500 py-8">
                      No entities in this layer yet. Create some ATRs!
                    </div>
                  ) : (
                    <div className="space-y-2">
                      {entities.map((entity) => (
                        <div
                          key={entity.entity_id}
                          onClick={() => handleNavigateY(entity.entity_id)}
                          className={`border rounded p-3 cursor-pointer transition-colors ${
                            position.y === entity.entity_id
                              ? 'border-blue-500 bg-blue-900 bg-opacity-30'
                              : 'border-gray-700 hover:border-gray-600 bg-gray-800'
                          }`}
                        >
                          <div className="flex justify-between items-start mb-2">
                            <div className="font-mono text-sm text-blue-400">
                              {entity.entity_id}
                            </div>
                            <div className="text-xs text-gray-500">
                              {entity.entity_type}
                            </div>
                          </div>
                          <div className="text-white font-semibold">{entity.name}</div>
                          {entity.data_type && (
                            <div className="mt-2 flex gap-2 text-xs">
                              <span className="bg-purple-900 bg-opacity-50 px-2 py-1 rounded">
                                {entity.data_type}
                              </span>
                              {entity.gui_widget && (
                                <span className="bg-green-900 bg-opacity-50 px-2 py-1 rounded">
                                  {entity.gui_widget}
                                </span>
                              )}
                              {entity.required && (
                                <span className="bg-red-900 bg-opacity-50 px-2 py-1 rounded">
                                  REQUIRED
                                </span>
                              )}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* Test Results Tab */}
              {activeTab === 'tests' && (
                <div>
                  <h3 className="text-xl font-semibold text-blue-300 mb-4">
                    Test Results ({passedTests}/{totalTests} Passed)
                  </h3>
                  
                  {testResults.length === 0 ? (
                    <div className="text-center text-gray-500 py-8">
                      No tests run yet. Click "Run All Tests" to begin validation.
                    </div>
                  ) : (
                    <div className="space-y-2">
                      {testResults.map((test) => (
                        <div
                          key={test.id}
                          className={`border rounded p-3 ${
                            test.passed
                              ? 'border-green-700 bg-green-900 bg-opacity-20'
                              : 'border-red-700 bg-red-900 bg-opacity-20'
                          }`}
                        >
                          <div className="flex items-start justify-between mb-1">
                            <div className="font-semibold">
                              {test.passed ? '✅' : '❌'} {test.name}
                            </div>
                            <div className="text-xs text-gray-500 font-mono">{test.id}</div>
                          </div>
                          <div className="text-sm text-gray-300">{test.message}</div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Right Column - Logs */}
        <div className="col-span-3">
          <div className="bg-gray-800 rounded-lg p-4 border border-gray-700 h-full">
            <h3 className="text-lg font-semibold mb-3 text-blue-300">📜 Operation Logs</h3>
            <div className="space-y-2 text-xs font-mono overflow-y-auto max-h-[800px]">
              {logs.slice().reverse().map((log, idx) => (
                <div
                  key={idx}
                  className={`p-2 rounded border-l-2 ${
                    log.type === 'INIT' ? 'border-blue-500 bg-blue-900 bg-opacity-20' :
                    log.type === 'NAV_X' ? 'border-green-500 bg-green-900 bg-opacity-20' :
                    log.type === 'NAV_Y' ? 'border-purple-500 bg-purple-900 bg-opacity-20' :
                    log.type === 'NAV_Z' ? 'border-yellow-500 bg-yellow-900 bg-opacity-20' :
                    log.type === 'MATRIX' ? 'border-orange-500 bg-orange-900 bg-opacity-20' :
                    log.type === 'EXEC' ? 'border-red-500 bg-red-900 bg-opacity-20' :
                    'border-gray-500 bg-gray-900 bg-opacity-20'
                  }`}
                >
                  <div className="text-gray-400 text-xs mb-1">
                    [{log.type}] {new Date(log.timestamp).toLocaleTimeString()}
                  </div>
                  <div className="text-white">{log.message}</div>
                  {log.data && (
                    <div className="text-gray-500 mt-1 text-xs">
                      Position: ({log.position.x}, {log.position.y || 'null'}, {log.position.z})
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-6 text-center text-gray-500 text-sm">
        <div className="mb-1">
          🌉 THE BRIDGE Prototype • Validating 30 Years of Ontological Research
        </div>
        <div>
          KOOL TOOL SRL - România • Verso tecnologia che serve la felicità
        </div>
      </div>
    </div>
  );
}
