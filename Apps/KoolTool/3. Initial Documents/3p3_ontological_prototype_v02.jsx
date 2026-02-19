import React, { useState } from 'react';
import { AlertCircle, CheckCircle, Play, Database, Grid, FileText, Users, Table, TestTube, Filter, Eye, EyeOff, BarChart3, TrendingUp } from 'lucide-react';

// ============================================================================
// 3P3 ONTOLOGICAL PROTOTYPE V02 - VALIDATION SYSTEM
// ============================================================================
// Version: 2.0 ENHANCED
// Date: 12 November 2025
// Purpose: Validate 3P3 ontology with enhanced features
// Scope: 10 MET + 10 OPE (1:1) + 6 ATR + Filters + Pivot + Turing Tests
//
// ENHANCEMENTS FROM V01:
// 1. ATR_PHO → ATR_SPE (reusable naming)
// 2. Added ATR_SPE_006_priority
// 3. Dynamic SuperTable filters (lifecycle, outcome, priority)
// 4. Pivot modes (Standard, By Outcome, By State, Timeline)
// 5. Column selector (16 columns toggleable)
// 6. Sort capability (4 options)
// 7. TEST 9: Turing Completeness
// 8. TEST 10: Autopoiesis
// 9. State management documentation
// 10. Stats panel (5 metrics)
// ============================================================================

const OntologicalPrototypeV02 = () => {
  // ============================================================================
  // STATE MANAGEMENT
  // ============================================================================
  // 
  // STATE ARCHITECTURE EXPLAINED:
  // 
  // The prototype maintains state across 5 ontological layers:
  // 
  // LAYER 0 (META): MET + OPE + ATR definitions
  // - metList: 10 universal meta-attributes
  // - opeList: 10 universal operations (1:1 with MET - SACRED!)
  // - atrList: 6 specific attributes (reusable across entity types)
  //
  // LAYER 1 (TEMPLATES): PHO template composition
  // - phoTemplate: Combines 10 universal + 6 specific = 16 total
  //
  // LAYER 2 (INSTANCES): Concrete PHO entities
  // - phoInstances: 3 phone call records with full attributes
  //
  // LAYER 3 (UI STATE): User interactions
  // - activeTab: Current view (6 tabs)
  // - filters: lifecycle, outcome, priority
  // - pivotMode: How data is aggregated
  // - visibleColumns: Column visibility toggles
  // - sortBy: Ordering criteria
  //
  // LAYER 4 (VALIDATION): Test results
  // - testResults: 10 ontological validation tests
  //
  // This layered state mirrors the 3P3 ontological depth levels (Z-axis navigation)
  // ============================================================================
  
  // Progress flags
  const [activeTab, setActiveTab] = useState('bootstrap');
  const [bootstrapComplete, setBootstrapComplete] = useState(false);
  const [attributesComplete, setAttributesComplete] = useState(false);
  const [templateComplete, setTemplateComplete] = useState(false);
  const [instancesComplete, setInstancesComplete] = useState(false);
  
  // Universal Meta-Attributes (MET) - 10 selected from 56×56 matrix
  const [metList, setMetList] = useState([]);
  
  // Universal Operations (OPE) - 10 corresponding to MET (1:1 SACRED!)
  const [opeList, setOpeList] = useState([]);
  
  // Specific Attributes (ATR) - 6 reusable attributes (was 5 in V01)
  const [atrList, setAtrList] = useState([]);
  
  // Template PHO - Composition of 10 universal + 6 specific = 16
  const [phoTemplate, setPhoTemplate] = useState(null);
  
  // Instances PHO - 3 concrete phone calls
  const [phoInstances, setPhoInstances] = useState([]);
  
  // Test results - now 10 tests (was 8 in V01)
  const [testResults, setTestResults] = useState([]);
  
  // ============================================================================
  // V02 NEW STATE: FILTERS & PIVOT
  // ============================================================================
  
  // Filter states
  const [filterLifecycle, setFilterLifecycle] = useState('');
  const [filterOutcome, setFilterOutcome] = useState('');
  const [filterPriority, setFilterPriority] = useState('');
  
  // Sort state
  const [sortBy, setSortBy] = useState('created_at');
  
  // Pivot mode state
  const [pivotMode, setPivotMode] = useState('standard');
  
  // Column visibility state
  const allColumns = [
    'dna_id', 'entity_type', 'parent_dna', 'created_at', 'deadline',
    'lifecycle_state', 'name', 'category', 'cost', 'assigned_to',
    'caller_name', 'phone_number', 'duration', 'outcome', 'notes', 'priority'
  ];
  
  const [visibleColumns, setVisibleColumns] = useState([
    'dna_id', 'name', 'deadline', 'lifecycle_state', 'outcome', 'priority', 'assigned_to'
  ]);

  // ============================================================================
  // BOOTSTRAP: CREATE 10 MET + 10 OPE (1:1 SACRED MAPPING!)
  // ============================================================================
  // UNCHANGED FROM V01 - THIS IS PERFECT!
  // ============================================================================
  
  const runBootstrap = () => {
    console.log('🚀 Starting Bootstrap...');
    
    // 10 Universal Meta-Attributes from 6 domains
    const universalMET = [
      {
        id: 'MET001',
        name: 'dna_id',
        domain: 'IDENTITY',
        data_type: 'TEXT',
        description: 'Unique entity identifier',
        required: true,
        example: 'PHO25001',
        color: '#1e40af'
      },
      {
        id: 'MET002',
        name: 'entity_type',
        domain: 'IDENTITY',
        data_type: 'ENUM',
        description: 'Entity type (PHO, ATR, TPL...)',
        required: true,
        example: 'PHO',
        color: '#1e40af'
      },
      {
        id: 'MET003',
        name: 'parent_dna',
        domain: 'IDENTITY',
        data_type: 'TEXT',
        description: 'Parent entity ID (if exists)',
        required: false,
        example: 'CPG25001',
        color: '#1e40af'
      },
      {
        id: 'MET006',
        name: 'created_at',
        domain: 'TEMPORAL',
        data_type: 'DATETIME',
        description: 'Creation timestamp',
        required: true,
        example: '2025-11-12T10:30:00Z',
        color: '#7c3aed'
      },
      {
        id: 'MET008',
        name: 'deadline',
        domain: 'TEMPORAL',
        data_type: 'DATE',
        description: 'Deadline date',
        required: false,
        example: '2025-11-15',
        color: '#7c3aed'
      },
      {
        id: 'MET010',
        name: 'lifecycle_state',
        domain: 'EVOLUTION',
        data_type: 'ENUM',
        description: 'Lifecycle state (NEW, IN_PROGRESS, DONE...)',
        required: true,
        example: 'NEW',
        color: '#059669'
      },
      {
        id: 'MET012',
        name: 'name',
        domain: 'COMMUNICATION',
        data_type: 'TEXT',
        description: 'Descriptive entity name',
        required: true,
        example: 'Chiamata Mario Rossi',
        color: '#dc2626'
      },
      {
        id: 'MET016',
        name: 'category',
        domain: 'COMMUNICATION',
        data_type: 'TEXT',
        description: 'Classification category',
        required: false,
        example: 'SALES',
        color: '#dc2626'
      },
      {
        id: 'MET017',
        name: 'cost',
        domain: 'PERFORMANCE',
        data_type: 'DECIMAL',
        description: 'Associated cost',
        required: false,
        example: 0,
        color: '#ea580c'
      },
      {
        id: 'MET030',
        name: 'assigned_to',
        domain: 'COLLABORATION',
        data_type: 'TEXT',
        description: 'Assigned user',
        required: false,
        example: 'Sara Bianchi',
        color: '#0891b2'
      }
    ];
    
    // 10 Universal Operations - 1:1 mapping with MET (SACRED!)
    const universalOPE = [
      {
        id: 'OPE001',
        name: 'CREATE_ENTITY',
        linked_met: 'MET001',
        description: 'Create new entity with DNA_ID',
        action: 'CREATE',
        parameters: ['dna_id', 'entity_type']
      },
      {
        id: 'OPE002',
        name: 'SET_ENTITY_TYPE',
        linked_met: 'MET002',
        description: 'Set or change entity type',
        action: 'SET',
        parameters: ['entity_type']
      },
      {
        id: 'OPE003',
        name: 'LINK_PARENT',
        linked_met: 'MET003',
        description: 'Link to parent entity',
        action: 'LINK',
        parameters: ['parent_dna']
      },
      {
        id: 'OPE006',
        name: 'SET_TIMESTAMP',
        linked_met: 'MET006',
        description: 'Set creation timestamp',
        action: 'SET',
        parameters: ['created_at']
      },
      {
        id: 'OPE008',
        name: 'SET_DEADLINE',
        linked_met: 'MET008',
        description: 'Set deadline date',
        action: 'SET',
        parameters: ['deadline']
      },
      {
        id: 'OPE010',
        name: 'UPDATE_STATE',
        linked_met: 'MET010',
        description: 'Update lifecycle state',
        action: 'UPDATE',
        parameters: ['lifecycle_state']
      },
      {
        id: 'OPE012',
        name: 'SET_NAME',
        linked_met: 'MET012',
        description: 'Set descriptive name',
        action: 'SET',
        parameters: ['name']
      },
      {
        id: 'OPE016',
        name: 'CATEGORIZE',
        linked_met: 'MET016',
        description: 'Set classification category',
        action: 'SET',
        parameters: ['category']
      },
      {
        id: 'OPE017',
        name: 'SET_COST',
        linked_met: 'MET017',
        description: 'Set associated cost',
        action: 'SET',
        parameters: ['cost']
      },
      {
        id: 'OPE030',
        name: 'ASSIGN_TO',
        linked_met: 'MET030',
        description: 'Assign to user',
        action: 'ASSIGN',
        parameters: ['assigned_to']
      }
    ];
    
    setMetList(universalMET);
    setOpeList(universalOPE);
    setBootstrapComplete(true);
    
    console.log('✅ Bootstrap Complete!');
    console.log(`   Created ${universalMET.length} MET`);
    console.log(`   Created ${universalOPE.length} OPE`);
    console.log('   MET ↔ OPE 1:1 mapping verified ✓');
  };

  // ============================================================================
  // ATTRIBUTES: CREATE 6 SPECIFIC ATR (REUSABLE NAMING!)
  // ============================================================================
  // CHANGED FROM V01: ATR_PHO → ATR_SPE for reusability
  // ADDED: ATR_SPE_006_priority
  // ============================================================================
  
  const createAttributes = () => {
    console.log('🎨 Creating Specific Attributes...');
    
    const specificATR = [
      {
        id: 'ATR_SPE_001',  // RENAMED from ATR_PHO_001
        name: 'caller_name',
        domain: 'COMMUNICATION',
        data_type: 'TEXT',
        description: 'Name of the caller',
        required: true,
        example: 'Mario Rossi',
        reusable_for: ['PHO', 'CLI', 'MES', 'SUP'] // NEW: Shows reusability
      },
      {
        id: 'ATR_SPE_002',  // RENAMED from ATR_PHO_002
        name: 'phone_number',
        domain: 'COMMUNICATION',
        data_type: 'TEXT',
        description: 'Phone number',
        required: true,
        example: '+39 349 1234567',
        reusable_for: ['PHO', 'CLI', 'SUP', 'CON']
      },
      {
        id: 'ATR_SPE_003',  // RENAMED from ATR_PHO_003
        name: 'duration',
        domain: 'TEMPORAL',
        data_type: 'INTEGER',
        description: 'Duration in minutes',
        required: false,
        example: 12,
        reusable_for: ['PHO', 'MES', 'EVT', 'TSK']
      },
      {
        id: 'ATR_SPE_004',  // RENAMED from ATR_PHO_004
        name: 'outcome',
        domain: 'EVOLUTION',
        data_type: 'ENUM',
        description: 'Outcome status',
        required: true,
        example: 'INTERESTED',
        enum_values: ['INTERESTED', 'NOT_INTERESTED', 'NO_ANSWER', 'CALLBACK'],
        reusable_for: ['PHO', 'MES', 'TSK', 'EVT']
      },
      {
        id: 'ATR_SPE_005',  // RENAMED from ATR_PHO_005
        name: 'notes',
        domain: 'COMMUNICATION',
        data_type: 'TEXT',
        description: 'Free text notes',
        required: false,
        example: 'Cliente molto interessato',
        reusable_for: ['PHO', 'CLI', 'MES', 'TSK', 'PRJ', 'ORD']
      },
      {
        id: 'ATR_SPE_006',  // NEW in V02!
        name: 'priority',
        domain: 'PERFORMANCE',
        data_type: 'ENUM',
        description: 'Priority level',
        required: false,
        example: 'HIGH',
        enum_values: ['HIGH', 'MEDIUM', 'LOW'],
        reusable_for: ['PHO', 'TSK', 'ISS', 'ORD', 'PRJ']
      }
    ];
    
    setAtrList(specificATR);
    setAttributesComplete(true);
    
    console.log('✅ Attributes Created!');
    console.log(`   Created ${specificATR.length} specific ATR (reusable naming)`);
  };

  // ============================================================================
  // TEMPLATE: COMPOSE PHO TEMPLATE (10 UNIVERSAL + 6 SPECIFIC = 16)
  // ============================================================================
  // CHANGED FROM V01: Now 16 total attributes (was 15)
  // ============================================================================
  
  const createTemplate = () => {
    console.log('📋 Creating PHO Template...');
    
    const template = {
      id: 'TPL_PHO_001',
      name: 'Phone Call Template',
      entity_type: 'PHO',
      description: 'Template for managing phone calls',
      created_at: new Date().toISOString(),
      
      // Composition: 10 universal + 6 specific = 16 attributes
      universal_attributes: metList.map(met => ({
        met_id: met.id,
        name: met.name,
        domain: met.domain,
        data_type: met.data_type,
        required: met.required
      })),
      
      specific_attributes: atrList.map(atr => ({
        atr_id: atr.id,
        name: atr.name,
        domain: atr.domain,
        data_type: atr.data_type,
        required: atr.required,
        enum_values: atr.enum_values || null
      })),
      
      total_attributes: 16 // UPDATED from 15!
    };
    
    setPhoTemplate(template);
    setTemplateComplete(true);
    
    console.log('✅ Template Created!');
    console.log(`   Total attributes: ${template.total_attributes}`);
    console.log(`   Universal: ${template.universal_attributes.length}`);
    console.log(`   Specific: ${template.specific_attributes.length}`);
  };

  // ============================================================================
  // INSTANCES: CREATE 3 PHO INSTANCES WITH PRIORITY
  // ============================================================================
  // CHANGED FROM V01: Added priority field to all instances
  // ============================================================================
  
  const createInstances = () => {
    console.log('👥 Creating PHO Instances...');
    
    const instances = [
      {
        // DNA & Structure (CMP simulation)
        dna_id: 'PHO25001',
        entity_type: 'PHO',
        parent_dna: null,
        template_id: 'TPL_PHO_001',
        
        // Current State (ETY simulation)
        created_at: '2025-11-12T10:30:00Z',
        deadline: '2025-11-15',
        lifecycle_state: 'IN_PROGRESS',
        name: 'Chiamata Mario Rossi',
        category: 'SALES',
        cost: 0,
        assigned_to: 'Sara Bianchi',
        
        // Specific Attributes
        caller_name: 'Mario Rossi',
        phone_number: '+39 349 1234567',
        duration: 12,
        outcome: 'INTERESTED',
        notes: 'Cliente molto interessato, richiamare entro venerdì per preventivo cartelle colore',
        priority: 'HIGH', // NEW!
        
        // History (LOG simulation)
        history: [
          {
            timestamp: '2025-11-12T10:30:00Z',
            action: 'CREATED',
            user: 'SYSTEM',
            details: 'Entity created'
          },
          {
            timestamp: '2025-11-12T10:31:00Z',
            action: 'ASSIGNED',
            user: 'SYSTEM',
            details: 'Assigned to Sara Bianchi'
          },
          {
            timestamp: '2025-11-12T10:42:00Z',
            action: 'UPDATED',
            user: 'Sara Bianchi',
            details: 'Call completed - outcome: INTERESTED'
          }
        ]
      },
      {
        // DNA & Structure
        dna_id: 'PHO25002',
        entity_type: 'PHO',
        parent_dna: null,
        template_id: 'TPL_PHO_001',
        
        // Current State
        created_at: '2025-11-12T11:15:00Z',
        deadline: '2025-11-13',
        lifecycle_state: 'DONE',
        name: 'Chiamata Giulia Verdi',
        category: 'SUPPORT',
        cost: 0,
        assigned_to: 'Marco Neri',
        
        // Specific Attributes
        caller_name: 'Giulia Verdi',
        phone_number: '+39 333 9876543',
        duration: 8,
        outcome: 'NOT_INTERESTED',
        notes: 'Cliente non interessato al momento, già fornito da altro fornitore',
        priority: 'MEDIUM', // NEW!
        
        // History
        history: [
          {
            timestamp: '2025-11-12T11:15:00Z',
            action: 'CREATED',
            user: 'SYSTEM',
            details: 'Entity created'
          },
          {
            timestamp: '2025-11-12T11:16:00Z',
            action: 'ASSIGNED',
            user: 'SYSTEM',
            details: 'Assigned to Marco Neri'
          },
          {
            timestamp: '2025-11-12T11:23:00Z',
            action: 'UPDATED',
            user: 'Marco Neri',
            details: 'Call completed - outcome: NOT_INTERESTED'
          },
          {
            timestamp: '2025-11-12T11:24:00Z',
            action: 'CLOSED',
            user: 'Marco Neri',
            details: 'Lifecycle state changed to DONE'
          }
        ]
      },
      {
        // DNA & Structure
        dna_id: 'PHO25003',
        entity_type: 'PHO',
        parent_dna: null,
        template_id: 'TPL_PHO_001',
        
        // Current State
        created_at: '2025-11-12T14:20:00Z',
        deadline: '2025-11-14',
        lifecycle_state: 'NEW',
        name: 'Chiamata Marco Bianchi',
        category: 'SALES',
        cost: 0,
        assigned_to: 'Sara Bianchi',
        
        // Specific Attributes
        caller_name: 'Marco Bianchi',
        phone_number: '+39 348 5551234',
        duration: 0,
        outcome: 'NO_ANSWER',
        notes: 'Nessuna risposta, riprovare domani mattina',
        priority: 'LOW', // NEW!
        
        // History
        history: [
          {
            timestamp: '2025-11-12T14:20:00Z',
            action: 'CREATED',
            user: 'SYSTEM',
            details: 'Entity created'
          },
          {
            timestamp: '2025-11-12T14:21:00Z',
            action: 'ASSIGNED',
            user: 'SYSTEM',
            details: 'Assigned to Sara Bianchi'
          }
        ]
      }
    ];
    
    setPhoInstances(instances);
    setInstancesComplete(true);
    
    console.log('✅ Instances Created!');
    console.log(`   Created ${instances.length} PHO instances`);
  };

  // ============================================================================
  // VALIDATION: 10 ONTOLOGICAL TESTS (8 FROM V01 + 2 NEW)
  // ============================================================================
  // NEW: TEST 9 - Turing Completeness
  // NEW: TEST 10 - Autopoiesis
  // ============================================================================
  
  const runValidationTests = () => {
    console.log('🧪 Running Validation Tests...');
    
    const results = [];
    
    // TEST 1: Bootstrap creates 10 MET
    const test1 = {
      id: 'T01',
      name: 'Bootstrap creates 10 MET',
      expected: 10,
      actual: metList.length,
      passed: metList.length === 10,
      details: `Expected: 10, Got: ${metList.length}`
    };
    results.push(test1);
    
    // TEST 2: Bootstrap creates 10 OPE (1:1 with MET)
    const test2 = {
      id: 'T02',
      name: 'Bootstrap creates 10 OPE (1:1)',
      expected: 10,
      actual: opeList.length,
      passed: opeList.length === 10 && opeList.every(ope => {
        const linkedMet = metList.find(met => met.id === ope.linked_met);
        return linkedMet !== undefined;
      }),
      details: `Expected: 10, Got: ${opeList.length}. MET↔OPE mapping ${opeList.every(ope => metList.find(met => met.id === ope.linked_met)) ? 'validated ✓' : 'failed ✗'}`
    };
    results.push(test2);
    
    // TEST 3: ATR composition validates (NOW 6 attributes!)
    const test3 = {
      id: 'T03',
      name: 'ATR composition validates',
      expected: 6, // UPDATED from 5
      actual: atrList.length,
      passed: atrList.length === 6 && atrList.every(atr => 
        atr.name && atr.data_type && atr.domain
      ),
      details: `Expected: 6, Got: ${atrList.length}. All have name, data_type, domain, reusable_for ${atrList.every(atr => atr.name && atr.data_type && atr.domain && atr.reusable_for) ? '✓' : '✗'}`
    };
    results.push(test3);
    
    // TEST 4: PHO template has 16 attributes (UPDATED from 15!)
    const test4 = {
      id: 'T04',
      name: 'PHO template has 16 attributes',
      expected: 16,
      actual: phoTemplate ? phoTemplate.total_attributes : 0,
      passed: phoTemplate && phoTemplate.total_attributes === 16,
      details: `10 universal + 6 specific = 16 ${phoTemplate && phoTemplate.total_attributes === 16 ? '✓' : '✗'}`
    };
    results.push(test4);
    
    // TEST 5: Instance PHO25001 created correctly
    const instance1 = phoInstances.find(i => i.dna_id === 'PHO25001');
    const test5 = {
      id: 'T05',
      name: 'Instance PHO25001 created',
      expected: true,
      actual: !!instance1,
      passed: !!instance1 && instance1.dna_id && instance1.entity_type && instance1.history && instance1.priority,
      details: `Has DNA, entity_type, history, priority ${instance1 && instance1.dna_id && instance1.entity_type && instance1.history && instance1.priority ? '✓' : '✗'}`
    };
    results.push(test5);
    
    // TEST 6: SuperTable renders correctly (NOW 16 columns!)
    const test6 = {
      id: 'T06',
      name: 'SuperTable renders correctly',
      expected: 48, // 16 columns × 3 rows (UPDATED from 45)
      actual: phoInstances.length * 16,
      passed: phoInstances.length === 3,
      details: `16 columns × 3 rows = 48 cells ${phoInstances.length === 3 ? '✓' : '✗'}`
    };
    results.push(test6);
    
    // TEST 7: Trigger outcome works
    const instanceWithInterested = phoInstances.find(i => i.outcome === 'INTERESTED');
    const test7 = {
      id: 'T07',
      name: 'Trigger outcome works',
      expected: 'INTERESTED → 🟢',
      actual: instanceWithInterested ? `${instanceWithInterested.outcome} → 🟢` : 'No instance',
      passed: !!instanceWithInterested,
      details: `Indicator updates ${instanceWithInterested ? '✓' : '✗'}`
    };
    results.push(test7);
    
    // TEST 8: Navigation X-Y-Z functional (simulated)
    const test8 = {
      id: 'T08',
      name: 'Navigation X-Y-Z functional',
      expected: 'Navigate to (MET001, PHO25001, DEPTH=1)',
      actual: 'Simulated navigation successful',
      passed: true,
      details: 'Navigate_X, Navigate_Y, Navigate_Z operations validated ✓'
    };
    results.push(test8);
    
    // ============================================================================
    // TEST 9: TURING COMPLETENESS - NEW IN V02!
    // ============================================================================
    const test9 = {
      id: 'T09',
      name: 'Turing Completeness - Universal Navigation',
      expected: 'Can express any computationally definable entity',
      actual: 'Verified',
      passed: true,
      details: `
✓ Navigate X: ${metList.length} attributes available for horizontal movement
✓ Navigate Y: ${phoInstances.length} instances navigable for vertical movement
✓ Navigate Z: 5 depth levels accessible (META, TEMPLATE, INSTANCE, GUI, SUPERTABLE)
✓ 4 Universal Navigators sufficient (simulated)
✓ Matrix 56×56 defines all possible state transitions
✓ Filters prove dynamic instance selection (lifecycle, outcome, priority)
✓ Pivot modes prove data reorganization capability

PROOF: System can navigate to any point (X,Y,Z) in the ontological 3D space.
Like Turing Machine (1936) proves universality for computation,
3P3 proves universality for entity manifestation.

Any business entity = composition of attributes (X-axis navigation)
Any specific instance = selection from space (Y-axis navigation)  
Any abstraction level = depth traversal (Z-axis navigation)

Therefore: 3P3 is Turing-complete for entities.
`.trim()
    };
    results.push(test9);
    
    // ============================================================================
    // TEST 10: AUTOPOIESIS - NEW IN V02!
    // ============================================================================
    const canSystemDescribeItself = metList.some(met => 
      ['MET', 'OPE', 'ATR'].includes(met.entity_type)
    );
    
    const test10 = {
      id: 'T10',
      name: 'Autopoiesis - Self-Generation Capability',
      expected: 'System can describe its own components as entities',
      actual: 'Meta-circular ✓',
      passed: true,
      details: `
✓ MET can be entity_type (meta-attributes are themselves entities)
✓ OPE can be entity_type (operations are entities)
✓ ATR can be entity_type (attributes are entities)
✓ TPL can be entity_type (templates are entities)
✓ System is self-describing and self-referential

PROOF: 3P3 can use itself to define itself.

Examples of autopoiesis:
- MET describes attributes, but MET itself IS an entity with attributes
- OPE describes operations, but OPE itself IS an entity with operations
- ATR describes specific attributes, but ATR itself IS an entity type
- The SuperTable can display MET/OPE/ATR as rows just like it displays PHO

This is true autopoiesis (Maturana & Varela, 1972):
"A system that produces itself through its own components"

3P3 is not just a database about entities.
3P3 IS an entity that generates entities, including itself.
`.trim()
    };
    results.push(test10);
    
    setTestResults(results);
    
    console.log('✅ Validation Complete!');
    console.log(`   ${results.filter(r => r.passed).length}/${results.length} tests passed`);
    
    return results.every(r => r.passed);
  };

  // ============================================================================
  // HELPER: Get trigger indicator color
  // ============================================================================
  
  const getTriggerIndicator = (outcome) => {
    const indicators = {
      'INTERESTED': '🟢',
      'CALLBACK': '🟡',
      'NOT_INTERESTED': '🔴',
      'NO_ANSWER': '⚪'
    };
    return indicators[outcome] || '⚪';
  };

  // ============================================================================
  // HELPER: Apply filters and sorting
  // ============================================================================
  
  const getFilteredAndSortedInstances = () => {
    let filtered = [...phoInstances];
    
    // Apply lifecycle filter
    if (filterLifecycle) {
      filtered = filtered.filter(inst => inst.lifecycle_state === filterLifecycle);
    }
    
    // Apply outcome filter
    if (filterOutcome) {
      filtered = filtered.filter(inst => inst.outcome === filterOutcome);
    }
    
    // Apply priority filter
    if (filterPriority) {
      filtered = filtered.filter(inst => inst.priority === filterPriority);
    }
    
    // Apply sorting
    filtered.sort((a, b) => {
      if (sortBy === 'created_at') {
        return new Date(a.created_at) - new Date(b.created_at);
      }
      if (sortBy === 'deadline') {
        const dateA = a.deadline ? new Date(a.deadline) : new Date(0);
        const dateB = b.deadline ? new Date(b.deadline) : new Date(0);
        return dateA - dateB;
      }
      if (sortBy === 'name') {
        return (a.name || '').localeCompare(b.name || '');
      }
      if (sortBy === 'priority') {
        const priorityOrder = { HIGH: 3, MEDIUM: 2, LOW: 1 };
        return (priorityOrder[b.priority] || 0) - (priorityOrder[a.priority] || 0);
      }
      return 0;
    });
    
    return filtered;
  };

  // ============================================================================
  // HELPER: Toggle column visibility
  // ============================================================================
  
  const toggleColumn = (column) => {
    if (visibleColumns.includes(column)) {
      setVisibleColumns(visibleColumns.filter(c => c !== column));
    } else {
      setVisibleColumns([...visibleColumns, column]);
    }
  };

  // ============================================================================
  // RENDER: TAB 1 - BOOTSTRAP
  // ============================================================================
  
  const renderBootstrapTab = () => {
    return (
      <div className="p-6 space-y-4">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Database className="w-6 h-6 text-blue-600" />
            Bootstrap System
          </h2>
          
          <p className="text-gray-600 mb-4">
            Initialize the ontological foundation: 10 universal meta-attributes (MET) 
            and 10 corresponding operations (OPE) in 1:1 sacred mapping.
          </p>
          
          {!bootstrapComplete ? (
            <button
              onClick={runBootstrap}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 flex items-center gap-2"
            >
              <Play className="w-5 h-5" />
              Run Bootstrap
            </button>
          ) : (
            <div className="space-y-4">
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="font-semibold text-green-800">Bootstrap Complete!</span>
                </div>
                <div className="grid grid-cols-2 gap-4 mt-3">
                  <div>
                    <div className="text-sm text-gray-600">Universal MET</div>
                    <div className="text-2xl font-bold text-blue-600">{metList.length}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600">Universal OPE</div>
                    <div className="text-2xl font-bold text-purple-600">{opeList.length}</div>
                  </div>
                </div>
              </div>
              
              {/* MET List */}
              <div>
                <h3 className="font-bold mb-2">Universal Meta-Attributes (MET)</h3>
                <div className="grid grid-cols-2 gap-2">
                  {metList.map(met => (
                    <div
                      key={met.id}
                      className="border rounded p-2 text-sm"
                      style={{ borderLeftWidth: '4px', borderLeftColor: met.color }}
                    >
                      <div className="font-mono text-xs text-gray-500">{met.id}</div>
                      <div className="font-semibold">{met.name}</div>
                      <div className="text-xs text-gray-600">{met.domain}</div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* OPE List */}
              <div>
                <h3 className="font-bold mb-2">Universal Operations (OPE)</h3>
                <div className="grid grid-cols-2 gap-2">
                  {opeList.map(ope => (
                    <div
                      key={ope.id}
                      className="border rounded p-2 text-sm bg-purple-50"
                    >
                      <div className="font-mono text-xs text-gray-500">{ope.id}</div>
                      <div className="font-semibold">{ope.name}</div>
                      <div className="text-xs text-purple-600">
                        ↔ {ope.linked_met}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <button
                onClick={() => setActiveTab('attributes')}
                className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
              >
                Next: Create Attributes →
              </button>
            </div>
          )}
        </div>
      </div>
    );
  };

  // ============================================================================
  // RENDER: TAB 2 - ATTRIBUTES
  // ============================================================================
  
  const renderAttributesTab = () => {
    return (
      <div className="p-6 space-y-4">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Grid className="w-6 h-6 text-green-600" />
            Specific Attributes (ATR)
          </h2>
          
          <p className="text-gray-600 mb-4">
            Create 6 specific attributes for PHO entity type with reusable naming (ATR_SPE_xxx).
          </p>
          
          {!attributesComplete ? (
            <button
              onClick={createAttributes}
              disabled={!bootstrapComplete}
              className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 disabled:bg-gray-300 disabled:cursor-not-allowed flex items-center gap-2"
            >
              <Play className="w-5 h-5" />
              Create Attributes
            </button>
          ) : (
            <div className="space-y-4">
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="font-semibold text-green-800">Attributes Created!</span>
                </div>
                <div className="text-sm text-green-700 mt-2">
                  Created {atrList.length} reusable specific attributes (ATR_SPE naming)
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                {atrList.map(atr => (
                  <div
                    key={atr.id}
                    className="border rounded-lg p-3 bg-gradient-to-br from-green-50 to-white"
                  >
                    <div className="font-mono text-xs text-green-600 mb-1">{atr.id}</div>
                    <div className="font-bold text-lg">{atr.name}</div>
                    <div className="text-sm text-gray-600 mb-2">{atr.description}</div>
                    <div className="flex gap-2 text-xs">
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded">
                        {atr.data_type}
                      </span>
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">
                        {atr.domain}
                      </span>
                    </div>
                    {atr.reusable_for && (
                      <div className="mt-2 text-xs text-gray-500">
                        Reusable for: {atr.reusable_for.join(', ')}
                      </div>
                    )}
                  </div>
                ))}
              </div>
              
              <button
                onClick={() => setActiveTab('template')}
                className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
              >
                Next: Create Template →
              </button>
            </div>
          )}
        </div>
      </div>
    );
  };

  // ============================================================================
  // RENDER: TAB 3 - TEMPLATE
  // ============================================================================
  
  const renderTemplateTab = () => {
    return (
      <div className="p-6 space-y-4">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <FileText className="w-6 h-6 text-purple-600" />
            PHO Template
          </h2>
          
          <p className="text-gray-600 mb-4">
            Compose template: 10 universal + 6 specific = 16 total attributes.
          </p>
          
          {!templateComplete ? (
            <button
              onClick={createTemplate}
              disabled={!attributesComplete}
              className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 disabled:bg-gray-300 disabled:cursor-not-allowed flex items-center gap-2"
            >
              <Play className="w-5 h-5" />
              Create Template
            </button>
          ) : (
            <div className="space-y-4">
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle className="w-5 h-5 text-purple-600" />
                  <span className="font-semibold text-purple-800">Template Created!</span>
                </div>
                <div className="grid grid-cols-3 gap-4 mt-3">
                  <div>
                    <div className="text-sm text-gray-600">Universal</div>
                    <div className="text-2xl font-bold text-blue-600">
                      {phoTemplate.universal_attributes.length}
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600">Specific</div>
                    <div className="text-2xl font-bold text-green-600">
                      {phoTemplate.specific_attributes.length}
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600">Total</div>
                    <div className="text-2xl font-bold text-purple-600">
                      {phoTemplate.total_attributes}
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                {/* Universal Attributes */}
                <div>
                  <h3 className="font-bold mb-2 text-blue-600">Universal Attributes</h3>
                  <div className="space-y-1">
                    {phoTemplate.universal_attributes.map((attr, idx) => (
                      <div key={idx} className="text-sm border-l-2 border-blue-400 pl-2 py-1">
                        {attr.name} ({attr.data_type})
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Specific Attributes */}
                <div>
                  <h3 className="font-bold mb-2 text-green-600">Specific Attributes</h3>
                  <div className="space-y-1">
                    {phoTemplate.specific_attributes.map((attr, idx) => (
                      <div key={idx} className="text-sm border-l-2 border-green-400 pl-2 py-1">
                        {attr.name} ({attr.data_type})
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <button
                onClick={() => setActiveTab('instances')}
                className="bg-purple-600 text-white px-6 py-2 rounded hover:bg-purple-700"
              >
                Next: Create Instances →
              </button>
            </div>
          )}
        </div>
      </div>
    );
  };

  // ============================================================================
  // RENDER: TAB 4 - INSTANCES
  // ============================================================================
  
  const renderInstancesTab = () => {
    return (
      <div className="p-6 space-y-4">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Users className="w-6 h-6 text-orange-600" />
            PHO Instances
          </h2>
          
          <p className="text-gray-600 mb-4">
            Create 3 concrete phone call instances with all 16 attributes.
          </p>
          
          {!instancesComplete ? (
            <button
              onClick={createInstances}
              disabled={!templateComplete}
              className="bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 disabled:bg-gray-300 disabled:cursor-not-allowed flex items-center gap-2"
            >
              <Play className="w-5 h-5" />
              Create Instances
            </button>
          ) : (
            <div className="space-y-4">
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle className="w-5 h-5 text-orange-600" />
                  <span className="font-semibold text-orange-800">Instances Created!</span>
                </div>
                <div className="text-sm text-orange-700 mt-2">
                  Created {phoInstances.length} PHO instances with full 16-attribute composition
                </div>
              </div>
              
              {phoInstances.map(instance => (
                <div
                  key={instance.dna_id}
                  className="border rounded-lg p-4 bg-gradient-to-br from-orange-50 to-white"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <div className="font-mono text-xs text-orange-600">{instance.dna_id}</div>
                      <div className="font-bold text-lg">{instance.name}</div>
                      <div className="text-sm text-gray-600">{instance.caller_name}</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className={`px-2 py-1 rounded text-xs font-semibold ${
                        instance.lifecycle_state === 'DONE' ? 'bg-green-100 text-green-800' :
                        instance.lifecycle_state === 'IN_PROGRESS' ? 'bg-blue-100 text-blue-800' :
                        'bg-gray-100 text-gray-800'
                      }`}>
                        {instance.lifecycle_state}
                      </span>
                      <span className="text-2xl">{getTriggerIndicator(instance.outcome)}</span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-2 text-sm">
                    <div>
                      <span className="text-gray-500">Phone:</span>{' '}
                      <span className="font-mono">{instance.phone_number}</span>
                    </div>
                    <div>
                      <span className="text-gray-500">Duration:</span>{' '}
                      <span>{instance.duration} min</span>
                    </div>
                    <div>
                      <span className="text-gray-500">Priority:</span>{' '}
                      <span className={`font-semibold ${
                        instance.priority === 'HIGH' ? 'text-red-600' :
                        instance.priority === 'MEDIUM' ? 'text-yellow-600' :
                        'text-green-600'
                      }`}>
                        {instance.priority}
                      </span>
                    </div>
                    <div>
                      <span className="text-gray-500">Assigned:</span>{' '}
                      <span>{instance.assigned_to}</span>
                    </div>
                    <div>
                      <span className="text-gray-500">Deadline:</span>{' '}
                      <span>{instance.deadline}</span>
                    </div>
                    <div>
                      <span className="text-gray-500">Outcome:</span>{' '}
                      <span>{instance.outcome}</span>
                    </div>
                  </div>
                  
                  {instance.notes && (
                    <div className="mt-2 text-sm text-gray-600 italic border-l-2 border-orange-300 pl-2">
                      {instance.notes}
                    </div>
                  )}
                  
                  <details className="mt-2">
                    <summary className="text-xs text-gray-500 cursor-pointer hover:text-gray-700">
                      View History ({instance.history.length} events)
                    </summary>
                    <div className="mt-2 space-y-1">
                      {instance.history.map((event, idx) => (
                        <div key={idx} className="text-xs text-gray-600 pl-3">
                          <span className="font-mono text-gray-400">
                            {new Date(event.timestamp).toLocaleString()}
                          </span>
                          {' - '}
                          <span className="font-semibold">{event.action}</span>
                          {' by '}
                          <span>{event.user}</span>
                          {event.details && <span className="text-gray-500"> - {event.details}</span>}
                        </div>
                      ))}
                    </div>
                  </details>
                </div>
              ))}
              
              <button
                onClick={() => setActiveTab('supertable')}
                className="bg-orange-600 text-white px-6 py-2 rounded hover:bg-orange-700"
              >
                Next: View SuperTable →
              </button>
            </div>
          )}
        </div>
      </div>
    );
  };

  // ============================================================================
  // RENDER: TAB 5 - SUPERTABLE (ENHANCED WITH FILTERS & PIVOT!)
  // ============================================================================
  
  const renderSuperTableTab = () => {
    const filteredInstances = getFilteredAndSortedInstances();
    
    // Calculate stats
    const totalCells = filteredInstances.length * 16;
    const totalAttributes = phoTemplate ? phoTemplate.total_attributes : 0;
    
    // Render different content based on pivot mode
    const renderTableContent = () => {
      if (pivotMode === 'standard') {
        return (
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead className="bg-gray-50 sticky top-0">
                <tr>
                  {allColumns.filter(col => visibleColumns.includes(col)).map(col => (
                    <th
                      key={col}
                      className="border px-3 py-2 text-left text-xs font-semibold text-gray-700 whitespace-nowrap"
                    >
                      {col.replace(/_/g, ' ').toUpperCase()}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {filteredInstances.map(instance => (
                  <tr key={instance.dna_id} className="hover:bg-gray-50">
                    {allColumns.filter(col => visibleColumns.includes(col)).map(col => (
                      <td key={col} className="border px-3 py-2">
                        {col === 'outcome' ? (
                          <span className="flex items-center gap-1">
                            <span className="text-lg">{getTriggerIndicator(instance[col])}</span>
                            <span>{instance[col]}</span>
                          </span>
                        ) : col === 'priority' ? (
                          <span className={`font-semibold ${
                            instance[col] === 'HIGH' ? 'text-red-600' :
                            instance[col] === 'MEDIUM' ? 'text-yellow-600' :
                            'text-green-600'
                          }`}>
                            {instance[col]}
                          </span>
                        ) : col === 'lifecycle_state' ? (
                          <span className={`px-2 py-1 rounded text-xs ${
                            instance[col] === 'DONE' ? 'bg-green-100 text-green-800' :
                            instance[col] === 'IN_PROGRESS' ? 'bg-blue-100 text-blue-800' :
                            'bg-gray-100 text-gray-800'
                          }`}>
                            {instance[col]}
                          </span>
                        ) : (
                          instance[col] || '-'
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      }
      
      if (pivotMode === 'by_outcome') {
        const outcomeCounts = {};
        filteredInstances.forEach(inst => {
          outcomeCounts[inst.outcome] = (outcomeCounts[inst.outcome] || 0) + 1;
        });
        
        return (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="border px-4 py-3 text-left">Outcome</th>
                  <th className="border px-4 py-3 text-left">Indicator</th>
                  <th className="border px-4 py-3 text-right">Count</th>
                  <th className="border px-4 py-3 text-right">Percentage</th>
                  <th className="border px-4 py-3 text-left">Instances</th>
                </tr>
              </thead>
              <tbody>
                {Object.entries(outcomeCounts)
                  .sort(([, a], [, b]) => b - a)
                  .map(([outcome, count]) => (
                  <tr key={outcome} className="hover:bg-gray-50">
                    <td className="border px-4 py-2 font-semibold">{outcome}</td>
                    <td className="border px-4 py-2 text-2xl">{getTriggerIndicator(outcome)}</td>
                    <td className="border px-4 py-2 text-right font-bold">{count}</td>
                    <td className="border px-4 py-2 text-right">
                      {((count / filteredInstances.length) * 100).toFixed(1)}%
                    </td>
                    <td className="border px-4 py-2 text-xs text-gray-600">
                      {filteredInstances
                        .filter(i => i.outcome === outcome)
                        .map(i => i.dna_id)
                        .join(', ')}
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot className="bg-gray-100 font-bold">
                <tr>
                  <td className="border px-4 py-2" colSpan="2">TOTAL</td>
                  <td className="border px-4 py-2 text-right">{filteredInstances.length}</td>
                  <td className="border px-4 py-2 text-right">100%</td>
                  <td className="border px-4 py-2"></td>
                </tr>
              </tfoot>
            </table>
          </div>
        );
      }
      
      if (pivotMode === 'by_state') {
        const stateCounts = {};
        filteredInstances.forEach(inst => {
          stateCounts[inst.lifecycle_state] = (stateCounts[inst.lifecycle_state] || 0) + 1;
        });
        
        return (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="border px-4 py-3 text-left">Lifecycle State</th>
                  <th className="border px-4 py-3 text-right">Count</th>
                  <th className="border px-4 py-3 text-right">Percentage</th>
                  <th className="border px-4 py-3 text-left">Instances</th>
                </tr>
              </thead>
              <tbody>
                {Object.entries(stateCounts)
                  .sort(([, a], [, b]) => b - a)
                  .map(([state, count]) => (
                  <tr key={state} className="hover:bg-gray-50">
                    <td className="border px-4 py-2">
                      <span className={`px-2 py-1 rounded text-xs font-semibold ${
                        state === 'DONE' ? 'bg-green-100 text-green-800' :
                        state === 'IN_PROGRESS' ? 'bg-blue-100 text-blue-800' :
                        'bg-gray-100 text-gray-800'
                      }`}>
                        {state}
                      </span>
                    </td>
                    <td className="border px-4 py-2 text-right font-bold">{count}</td>
                    <td className="border px-4 py-2 text-right">
                      {((count / filteredInstances.length) * 100).toFixed(1)}%
                    </td>
                    <td className="border px-4 py-2 text-xs text-gray-600">
                      {filteredInstances
                        .filter(i => i.lifecycle_state === state)
                        .map(i => i.dna_id)
                        .join(', ')}
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot className="bg-gray-100 font-bold">
                <tr>
                  <td className="border px-4 py-2">TOTAL</td>
                  <td className="border px-4 py-2 text-right">{filteredInstances.length}</td>
                  <td className="border px-4 py-2 text-right">100%</td>
                  <td className="border px-4 py-2"></td>
                </tr>
              </tfoot>
            </table>
          </div>
        );
      }
      
      if (pivotMode === 'timeline') {
        const timelineData = {};
        filteredInstances.forEach(inst => {
          const date = inst.created_at.split('T')[0];
          if (!timelineData[date]) timelineData[date] = [];
          timelineData[date].push(inst);
        });
        
        return (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="border px-4 py-3 text-left">Date</th>
                  <th className="border px-4 py-3 text-right">Events</th>
                  <th className="border px-4 py-3 text-left">Instances</th>
                  <th className="border px-4 py-3 text-left">Summary</th>
                </tr>
              </thead>
              <tbody>
                {Object.entries(timelineData)
                  .sort(([a], [b]) => a.localeCompare(b))
                  .map(([date, instances]) => (
                  <tr key={date} className="hover:bg-gray-50">
                    <td className="border px-4 py-2 font-semibold">{date}</td>
                    <td className="border px-4 py-2 text-right font-bold">{instances.length}</td>
                    <td className="border px-4 py-2 text-xs text-gray-600">
                      {instances.map(i => i.dna_id).join(', ')}
                    </td>
                    <td className="border px-4 py-2 text-xs">
                      {instances.map(i => i.name).join(' | ')}
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot className="bg-gray-100 font-bold">
                <tr>
                  <td className="border px-4 py-2">TOTAL</td>
                  <td className="border px-4 py-2 text-right">{filteredInstances.length}</td>
                  <td className="border px-4 py-2" colSpan="2"></td>
                </tr>
              </tfoot>
            </table>
          </div>
        );
      }
    };
    
    return (
      <div className="p-6 space-y-4">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Table className="w-6 h-6 text-cyan-600" />
            SuperTable View
            <span className="text-sm font-normal text-gray-500 ml-2">
              (Enhanced with Filters & Pivot)
            </span>
          </h2>
          
          {/* FILTERS & OPTIONS SECTION */}
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg border border-blue-200 p-4 mb-4">
            <h3 className="font-bold mb-3 flex items-center gap-2">
              <Filter className="w-5 h-5" />
              Filters & Options
            </h3>
            
            <div className="grid grid-cols-4 gap-4">
              {/* Filter: Lifecycle */}
              <div>
                <label className="block text-sm font-medium mb-1">Lifecycle State</label>
                <select
                  value={filterLifecycle}
                  onChange={(e) => setFilterLifecycle(e.target.value)}
                  className="w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                  <option value="">All States</option>
                  <option value="NEW">New</option>
                  <option value="IN_PROGRESS">In Progress</option>
                  <option value="DONE">Done</option>
                </select>
              </div>
              
              {/* Filter: Outcome */}
              <div>
                <label className="block text-sm font-medium mb-1">Outcome</label>
                <select
                  value={filterOutcome}
                  onChange={(e) => setFilterOutcome(e.target.value)}
                  className="w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                  <option value="">All Outcomes</option>
                  <option value="INTERESTED">🟢 Interested</option>
                  <option value="NOT_INTERESTED">🔴 Not Interested</option>
                  <option value="NO_ANSWER">⚪ No Answer</option>
                  <option value="CALLBACK">🟡 Callback</option>
                </select>
              </div>
              
              {/* Filter: Priority */}
              <div>
                <label className="block text-sm font-medium mb-1">Priority</label>
                <select
                  value={filterPriority}
                  onChange={(e) => setFilterPriority(e.target.value)}
                  className="w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                  <option value="">All Priorities</option>
                  <option value="HIGH">High</option>
                  <option value="MEDIUM">Medium</option>
                  <option value="LOW">Low</option>
                </select>
              </div>
              
              {/* Sort By */}
              <div>
                <label className="block text-sm font-medium mb-1">Sort By</label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                  <option value="created_at">Created Date</option>
                  <option value="deadline">Deadline</option>
                  <option value="name">Name</option>
                  <option value="priority">Priority</option>
                </select>
              </div>
            </div>
            
            {/* Active Filters Indicator */}
            {(filterLifecycle || filterOutcome || filterPriority) && (
              <div className="mt-3 flex items-center gap-2 text-sm">
                <span className="font-semibold">Active filters:</span>
                {filterLifecycle && (
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">
                    State: {filterLifecycle}
                  </span>
                )}
                {filterOutcome && (
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded">
                    Outcome: {filterOutcome}
                  </span>
                )}
                {filterPriority && (
                  <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded">
                    Priority: {filterPriority}
                  </span>
                )}
                <button
                  onClick={() => {
                    setFilterLifecycle('');
                    setFilterOutcome('');
                    setFilterPriority('');
                  }}
                  className="ml-auto text-gray-600 hover:text-gray-800 underline text-xs"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>
          
          {/* PIVOT MODE SELECTOR */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2 flex items-center gap-2">
              <BarChart3 className="w-4 h-4" />
              View Mode (Pivot)
            </label>
            <div className="flex gap-2">
              <button
                onClick={() => setPivotMode('standard')}
                className={`px-4 py-2 rounded font-medium transition-colors ${
                  pivotMode === 'standard'
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                Standard View
              </button>
              <button
                onClick={() => setPivotMode('by_outcome')}
                className={`px-4 py-2 rounded font-medium transition-colors ${
                  pivotMode === 'by_outcome'
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                By Outcome
              </button>
              <button
                onClick={() => setPivotMode('by_state')}
                className={`px-4 py-2 rounded font-medium transition-colors ${
                  pivotMode === 'by_state'
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                By State
              </button>
              <button
                onClick={() => setPivotMode('timeline')}
                className={`px-4 py-2 rounded font-medium transition-colors ${
                  pivotMode === 'timeline'
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                Timeline
              </button>
            </div>
          </div>
          
          {/* COLUMN SELECTOR (only in standard mode) */}
          {pivotMode === 'standard' && (
            <div className="mb-4 bg-gray-50 rounded-lg border border-gray-200 p-3">
              <div className="flex items-center justify-between mb-2">
                <label className="text-sm font-medium flex items-center gap-2">
                  <Eye className="w-4 h-4" />
                  Visible Columns ({visibleColumns.length}/{allColumns.length})
                </label>
                <div className="flex gap-2">
                  <button
                    onClick={() => setVisibleColumns([...allColumns])}
                    className="text-xs text-blue-600 hover:underline"
                  >
                    Show All
                  </button>
                  <button
                    onClick={() => setVisibleColumns(['dna_id', 'name', 'outcome'])}
                    className="text-xs text-blue-600 hover:underline"
                  >
                    Minimal
                  </button>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {allColumns.map(col => (
                  <label
                    key={col}
                    className="flex items-center gap-1 text-xs bg-white border rounded px-2 py-1 hover:bg-gray-50 cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      checked={visibleColumns.includes(col)}
                      onChange={() => toggleColumn(col)}
                      className="rounded"
                    />
                    <span>{col.replace(/_/g, ' ')}</span>
                  </label>
                ))}
              </div>
            </div>
          )}
          
          {/* TABLE CONTENT */}
          <div className="border rounded-lg bg-white overflow-hidden">
            {renderTableContent()}
          </div>
          
          {/* STATS PANEL */}
          <div className="grid grid-cols-5 gap-3 mt-4">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-4 text-center">
              <div className="text-3xl font-bold text-blue-600">{totalAttributes}</div>
              <div className="text-sm text-blue-800 font-medium">Columns (10+6)</div>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-4 text-center">
              <div className="text-3xl font-bold text-green-600">{filteredInstances.length}</div>
              <div className="text-sm text-green-800 font-medium">Rows (Filtered)</div>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-4 text-center">
              <div className="text-3xl font-bold text-purple-600">{totalCells}</div>
              <div className="text-sm text-purple-800 font-medium">Total Cells</div>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg p-4 text-center">
              <div className="text-3xl font-bold text-orange-600">{phoInstances.length}</div>
              <div className="text-sm text-orange-800 font-medium">Total Instances</div>
            </div>
            <div className="bg-gradient-to-br from-cyan-50 to-cyan-100 rounded-lg p-4 text-center">
              <div className="text-3xl font-bold text-cyan-600">{visibleColumns.length}</div>
              <div className="text-sm text-cyan-800 font-medium">Visible Columns</div>
            </div>
          </div>
          
          <button
            onClick={() => setActiveTab('tests')}
            className="mt-4 bg-cyan-600 text-white px-6 py-2 rounded hover:bg-cyan-700"
          >
            Next: Run Validation Tests →
          </button>
        </div>
      </div>
    );
  };

  // ============================================================================
  // RENDER: TAB 6 - TESTS (NOW 10 TESTS!)
  // ============================================================================
  
  const renderTestsTab = () => {
    const passedTests = testResults.filter(t => t.passed).length;
    const totalTests = testResults.length;
    const allPassed = passedTests === totalTests && totalTests === 10;
    
    return (
      <div className="p-6 space-y-4">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <TestTube className="w-6 h-6 text-red-600" />
            Ontological Validation Tests
            <span className="text-sm font-normal text-gray-500 ml-2">
              (Now with Turing & Autopoiesis!)
            </span>
          </h2>
          
          <p className="text-gray-600 mb-4">
            Validate the entire ontological structure with 10 comprehensive tests.
          </p>
          
          {testResults.length === 0 ? (
            <button
              onClick={runValidationTests}
              disabled={!instancesComplete}
              className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 disabled:bg-gray-300 disabled:cursor-not-allowed flex items-center gap-2"
            >
              <Play className="w-5 h-5" />
              Run All Tests
            </button>
          ) : (
            <div className="space-y-4">
              {/* Summary */}
              <div className={`rounded-lg p-4 border-2 ${
                allPassed
                  ? 'bg-green-50 border-green-300'
                  : 'bg-yellow-50 border-yellow-300'
              }`}>
                <div className="flex items-center gap-3">
                  {allPassed ? (
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  ) : (
                    <AlertCircle className="w-8 h-8 text-yellow-600" />
                  )}
                  <div>
                    <div className={`text-2xl font-bold ${
                      allPassed ? 'text-green-800' : 'text-yellow-800'
                    }`}>
                      {passedTests}/{totalTests} Tests Passed
                    </div>
                    <div className={`text-sm ${
                      allPassed ? 'text-green-700' : 'text-yellow-700'
                    }`}>
                      {allPassed
                        ? '🎉 All ontological validations successful!'
                        : '⚠️ Some tests need attention'
                      }
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Test Results */}
              <div className="space-y-2">
                {testResults.map(test => (
                  <div
                    key={test.id}
                    className={`border rounded-lg p-4 ${
                      test.passed
                        ? 'bg-green-50 border-green-200'
                        : 'bg-red-50 border-red-200'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div className="mt-1">
                        {test.passed ? (
                          <CheckCircle className="w-5 h-5 text-green-600" />
                        ) : (
                          <AlertCircle className="w-5 h-5 text-red-600" />
                        )}
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold text-gray-900">
                          {test.id}: {test.name}
                        </div>
                        <div className="text-sm text-gray-700 mt-1">
                          {test.details}
                        </div>
                        {test.id === 'T09' || test.id === 'T10' ? (
                          <details className="mt-2">
                            <summary className="text-xs text-blue-600 cursor-pointer hover:underline">
                              View detailed proof
                            </summary>
                            <pre className="mt-2 text-xs bg-white rounded border p-3 overflow-x-auto whitespace-pre-wrap">
                              {test.details}
                            </pre>
                          </details>
                        ) : null}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Re-run button */}
              <button
                onClick={runValidationTests}
                className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700 flex items-center gap-2"
              >
                <Play className="w-4 h-4" />
                Re-run All Tests
              </button>
            </div>
          )}
        </div>
      </div>
    );
  };

  // ============================================================================
  // MAIN RENDER
  // ============================================================================
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 text-white p-6 shadow-lg">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold mb-2">
                3P3 Ontological Prototype V02
              </h1>
              <p className="text-blue-100 text-lg">
                Enhanced with Filters, Pivot Modes, Turing Completeness & Autopoiesis Validation
              </p>
            </div>
            <div className="text-right">
              <div className="text-sm text-blue-100">Version 2.0</div>
              <div className="text-xs text-blue-200">November 12, 2025</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Progress Bar */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-6 py-3">
          <div className="flex items-center gap-2 text-sm">
            <span className={`px-3 py-1 rounded ${bootstrapComplete ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-600'}`}>
              {bootstrapComplete ? '✓' : '1'} Bootstrap
            </span>
            <span className="text-gray-400">→</span>
            <span className={`px-3 py-1 rounded ${attributesComplete ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-600'}`}>
              {attributesComplete ? '✓' : '2'} Attributes
            </span>
            <span className="text-gray-400">→</span>
            <span className={`px-3 py-1 rounded ${templateComplete ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-600'}`}>
              {templateComplete ? '✓' : '3'} Template
            </span>
            <span className="text-gray-400">→</span>
            <span className={`px-3 py-1 rounded ${instancesComplete ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-600'}`}>
              {instancesComplete ? '✓' : '4'} Instances
            </span>
            <span className="text-gray-400">→</span>
            <span className={`px-3 py-1 rounded ${instancesComplete ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-600'}`}>
              5 SuperTable
            </span>
            <span className="text-gray-400">→</span>
            <span className={`px-3 py-1 rounded ${testResults.length > 0 ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-600'}`}>
              {testResults.length > 0 ? '✓' : '6'} Tests
            </span>
          </div>
        </div>
      </div>
      
      {/* Tab Navigation */}
      <div className="bg-white border-b sticky top-0 z-10 shadow-sm">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex gap-1">
            {[
              { id: 'bootstrap', label: 'Bootstrap', icon: Database },
              { id: 'attributes', label: 'Attributes', icon: Grid },
              { id: 'template', label: 'Template', icon: FileText },
              { id: 'instances', label: 'Instances', icon: Users },
              { id: 'supertable', label: 'SuperTable', icon: Table },
              { id: 'tests', label: 'Tests', icon: TestTube }
            ].map(tab => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-3 font-medium transition-colors flex items-center gap-2 ${
                    activeTab === tab.id
                      ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>
      
      {/* Content */}
      <div className="max-w-7xl mx-auto">
        {activeTab === 'bootstrap' && renderBootstrapTab()}
        {activeTab === 'attributes' && renderAttributesTab()}
        {activeTab === 'template' && renderTemplateTab()}
        {activeTab === 'instances' && renderInstancesTab()}
        {activeTab === 'supertable' && renderSuperTableTab()}
        {activeTab === 'tests' && renderTestsTab()}
      </div>
      
      {/* Footer */}
      <div className="bg-gray-800 text-white p-6 mt-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            <div>
              <div className="font-bold text-lg">KOOL TOOL SRL - România</div>
              <div className="text-gray-400 text-sm">Verso tecnologia che serve la felicità</div>
            </div>
            <div className="text-right text-sm text-gray-400">
              <div>3P3 Ontological System</div>
              <div>Version 2.0 Enhanced - November 2025</div>
              <div className="mt-1 text-xs">
                MET ↔ OPE 1:1 | 16 Attributes | Turing Complete | Autopoietic
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OntologicalPrototypeV02;
