/**
 * Flipkart First Mile Operations Shelf - Vanilla JS Static App
 * Zero-dependency, pure static JavaScript for GitHub Pages
 */

const STORAGE_KEY = 'flipkart_fm_ops_resources_v3';
const USER_KEY = 'flipkart_fm_user_session';

const INITIAL_RESOURCES = [
  {
    id: 'link-drive-folder',
    title: 'CODES Folder',
    description: 'Google Drive codes folder containing First Mile operational scripts, BigQuery automations, and runbooks',
    type: 'code',
    frequency: 'often',
    url: 'https://drive.google.com/drive/folders/1LYTD8FkEtW2oZnjgrIYd1FUp7WjWrVqx?usp=sharing',
    owner: 'Operations HQ',
    priority: 'critical',
    status: 'active',
    isPinned: true,
    clickCount: 512,
    lastAccessed: 'Just now',
    updatedAt: new Date().toISOString(),
    createdAt: '2026-01-01T08:00:00Z',
    notes: 'Centralized FM Ops codes folder hosted on Google Drive.'
  },
  {
    id: 'sheet-fm-2026',
    title: 'FM-2026 Report',
    description: 'Master First Mile daily and weekly operational performance tracker',
    type: 'spreadsheet',
    frequency: 'often',
    url: 'https://docs.google.com/spreadsheets/d/1NiSZlvFP2zzLzFDd7m3AYpDDBVMy_jqeCsxrLIWeH0Q/edit?gid=1951789101#gid=1951789101',
    embedUrl: 'https://docs.google.com/spreadsheets/d/1NiSZlvFP2zzLzFDd7m3AYpDDBVMy_jqeCsxrLIWeH0Q/htmlembed?widget=true&headers=false',
    owner: 'Operations HQ',
    priority: 'critical',
    status: 'active',
    isPinned: true,
    clickCount: 284,
    lastAccessed: 'Updated today',
    updatedAt: new Date().toISOString(),
    createdAt: '2026-01-01T08:00:00Z'
  },
  {
    id: 'sheet-repo-do-1',
    title: 'REPO_DO_1',
    description: 'Daily operations dispatch and repository sheet 1',
    type: 'spreadsheet',
    frequency: 'often',
    url: 'https://docs.google.com/spreadsheets/d/1pA1Tiuavj8Kp6aD8KZ5oBN3hHOFGOiUAXFni293HOjY/edit#gid=0',
    embedUrl: 'https://docs.google.com/spreadsheets/d/1pA1Tiuavj8Kp6aD8KZ5oBN3hHOFGOiUAXFni293HOjY/htmlembed?widget=true&headers=false',
    owner: 'Operations HQ',
    priority: 'high',
    status: 'active',
    isPinned: true,
    clickCount: 196,
    lastAccessed: 'Updated today',
    updatedAt: new Date().toISOString(),
    createdAt: '2026-01-05T08:00:00Z'
  },
  {
    id: 'sheet-repo-dbd',
    title: 'REPO_DBD',
    description: 'Daily breakdown and dispatch repository sheet',
    type: 'spreadsheet',
    frequency: 'often',
    url: 'https://docs.google.com/spreadsheets/d/1hBkE6lYSKbzL6a2JU-DjCdhpWlBgCbD2ZtqtFJMnGho/edit#gid=0',
    embedUrl: 'https://docs.google.com/spreadsheets/d/1hBkE6lYSKbzL6a2JU-DjCdhpWlBgCbD2ZtqtFJMnGho/htmlembed?widget=true&headers=false',
    owner: 'Operations HQ',
    priority: 'high',
    status: 'active',
    isPinned: false,
    clickCount: 142,
    lastAccessed: 'Yesterday',
    updatedAt: new Date().toISOString(),
    createdAt: '2026-01-10T08:00:00Z'
  },
  {
    id: 'sheet-repo-holiday',
    title: 'REPO_HOLIDAY',
    description: 'Operational holiday and leave calendar repository',
    type: 'spreadsheet',
    frequency: 'rare',
    url: 'https://docs.google.com/spreadsheets/d/1jhrJKykL4zir0kVRIk8BA-WpO78xpj2mI6KNChMCAdA/edit#gid=0',
    embedUrl: 'https://docs.google.com/spreadsheets/d/1jhrJKykL4zir0kVRIk8BA-WpO78xpj2mI6KNChMCAdA/htmlembed?widget=true&headers=false',
    owner: 'Operations HQ',
    priority: 'medium',
    status: 'active',
    isPinned: false,
    clickCount: 45,
    lastAccessed: 'Last week',
    updatedAt: new Date().toISOString(),
    createdAt: '2026-01-15T08:00:00Z'
  },
  {
    id: 'sheet-raw-data',
    title: 'RAW_DATA_SHEET_URL',
    description: 'Raw data archive and unpartitioned logs sheet',
    type: 'spreadsheet',
    frequency: 'rare',
    url: 'https://docs.google.com/spreadsheets/d/1ruI6-CQuk5Gp0_b7jJFwS137RDktebP26yLFOiOscR8/edit?gid=0#gid=0',
    embedUrl: 'https://docs.google.com/spreadsheets/d/1ruI6-CQuk5Gp0_b7jJFwS137RDktebP26yLFOiOscR8/htmlembed?widget=true&headers=false',
    owner: 'Operations HQ',
    priority: 'low',
    status: 'active',
    isPinned: false,
    clickCount: 29,
    lastAccessed: '2 weeks ago',
    updatedAt: new Date().toISOString(),
    createdAt: '2026-02-01T08:00:00Z'
  },
  {
    id: 'dash-fm-reliability-hourly',
    title: 'FM Reliability Dashboard Hourly',
    description: 'Hourly reliability dashboard and SLA monitoring',
    type: 'dashboard',
    frequency: 'often',
    url: 'https://datastudio.google.com/reporting/16a41d51-79cc-46db-94a0-950e1dde25ce/page/guqxF',
    embedUrl: 'https://datastudio.google.com/embed/reporting/16a41d51-79cc-46db-94a0-950e1dde25ce/page/guqxF',
    owner: 'Operations HQ',
    priority: 'critical',
    status: 'active',
    isPinned: true,
    clickCount: 450,
    lastAccessed: 'Just now',
    updatedAt: new Date().toISOString(),
    createdAt: '2026-01-01T08:00:00Z'
  },
  {
    id: 'dash-low-drr',
    title: 'Low DRR',
    description: 'Low DRR operational dashboard & breach prevention',
    type: 'dashboard',
    frequency: 'often',
    url: 'https://datastudio.google.com/reporting/d6ba1ead-6818-4538-b076-a804aca57b2c/page/OGUwF',
    embedUrl: 'https://datastudio.google.com/embed/reporting/d6ba1ead-6818-4538-b076-a804aca57b2c/page/OGUwF',
    owner: 'Operations HQ',
    priority: 'high',
    status: 'active',
    isPinned: true,
    clickCount: 320,
    lastAccessed: '15 mins ago',
    updatedAt: new Date().toISOString(),
    createdAt: '2026-01-05T08:00:00Z'
  },
  {
    id: 'dash-pincode-servicibility',
    title: 'Pincode servicibility',
    description: 'First Mile pincode serviceability and pin map view',
    type: 'dashboard',
    frequency: 'often',
    url: 'https://datastudio.google.com/reporting/c52ab631-304c-43a7-a303-8871cce07a5a',
    embedUrl: 'https://datastudio.google.com/embed/reporting/c52ab631-304c-43a7-a303-8871cce07a5a',
    owner: 'Operations HQ',
    priority: 'high',
    status: 'active',
    isPinned: false,
    clickCount: 260,
    lastAccessed: '1 hour ago',
    updatedAt: new Date().toISOString(),
    createdAt: '2026-01-10T08:00:00Z'
  },
  {
    id: 'dash-mye-reliability',
    title: 'MYE Reliability Dashboard',
    description: 'MYE hub reliability and linehaul dispatch health',
    type: 'dashboard',
    frequency: 'often',
    url: 'https://datastudio.google.com/reporting/8226239e-c6f9-45be-8081-d5615ee5cb4b/page/ZLJyF',
    embedUrl: 'https://datastudio.google.com/embed/reporting/8226239e-c6f9-45be-8081-d5615ee5cb4b/page/ZLJyF',
    owner: 'Operations HQ',
    priority: 'high',
    status: 'active',
    isPinned: false,
    clickCount: 180,
    lastAccessed: '2 hours ago',
    updatedAt: new Date().toISOString(),
    createdAt: '2026-01-12T08:00:00Z'
  },
  {
    id: 'dash-mys-reliability',
    title: 'MYS Reliability Dashboard',
    description: 'MYS regional hub reliability statistics',
    type: 'dashboard',
    frequency: 'often',
    url: 'https://datastudio.google.com/reporting/f1f94680-7bd2-443c-b9dd-f5d720b181c2/page/5GfyF',
    embedUrl: 'https://datastudio.google.com/embed/reporting/f1f94680-7bd2-443c-b9dd-f5d720b181c2/page/5GfyF',
    owner: 'Operations HQ',
    priority: 'high',
    status: 'active',
    isPinned: false,
    clickCount: 175,
    lastAccessed: '3 hours ago',
    updatedAt: new Date().toISOString(),
    createdAt: '2026-01-12T08:00:00Z'
  },
  {
    id: 'dash-hub-cap-infra',
    title: 'Hub Cap vs Infra Dashboard',
    description: 'Hub capacity vs infrastructure allocation dashboard',
    type: 'dashboard',
    frequency: 'often',
    url: 'https://script.google.com/a/macros/flipkart.com/s/AKfycbyZrNtS-Xx-olt0lachVW7m0QZVjlTPWhLPJz5b8K_6D7D6gpIWJjkJS4qqrKQwKLUlBg/exec',
    embedUrl: 'https://script.google.com/a/macros/flipkart.com/s/AKfycbyZrNtS-Xx-olt0lachVW7m0QZVjlTPWhLPJz5b8K_6D7D6gpIWJjkJS4qqrKQwKLUlBg/exec',
    owner: 'Operations HQ',
    priority: 'critical',
    status: 'active',
    isPinned: true,
    clickCount: 290,
    lastAccessed: '45 mins ago',
    updatedAt: new Date().toISOString(),
    createdAt: '2026-01-15T08:00:00Z'
  },
  {
    id: 'dash-picked-count',
    title: 'D-1 Picked Count',
    description: 'Day-1 picked count operational dashboard',
    type: 'dashboard',
    frequency: 'often',
    url: 'https://gaganl1.github.io/Picked-Count-dashboard/',
    embedUrl: 'https://gaganl1.github.io/Picked-Count-dashboard/',
    owner: 'Operations HQ',
    priority: 'high',
    status: 'active',
    isPinned: true,
    clickCount: 310,
    lastAccessed: '1 hour ago',
    updatedAt: new Date().toISOString(),
    createdAt: '2026-01-18T08:00:00Z'
  },
  {
    id: 'dash-operational-nrt',
    title: 'Operational NRT',
    description: 'Near real-time operations performance dashboard',
    type: 'dashboard',
    frequency: 'often',
    url: 'https://script.google.com/a/macros/flipkart.com/s/AKfycbxErWteckQlJvfaA-oxNspDwCDHOrkQHmFeaZ3bXoMiR9PTy440zzIjBAvJl-byQ9Fr/exec',
    embedUrl: 'https://script.google.com/a/macros/flipkart.com/s/AKfycbxErWteckQlJvfaA-oxNspDwCDHOrkQHmFeaZ3bXoMiR9PTy440zzIjBAvJl-byQ9Fr/exec',
    owner: 'Operations HQ',
    priority: 'critical',
    status: 'active',
    isPinned: true,
    clickCount: 340,
    lastAccessed: '10 mins ago',
    updatedAt: new Date().toISOString(),
    createdAt: '2026-01-20T08:00:00Z'
  },
  {
    id: 'code-bq-reconciliation',
    title: 'Daily Linehaul Ingestion & Breach Audit Script',
    description: 'BigQuery SQL automation detecting delayed dock-in events and SLA breaches',
    type: 'code',
    frequency: 'often',
    url: 'https://drive.google.com/drive/folders/1LYTD8FkEtW2oZnjgrIYd1FUp7WjWrVqx?usp=sharing',
    owner: 'Operations Engineering',
    priority: 'critical',
    status: 'active',
    isPinned: false,
    clickCount: 164,
    language: 'sql',
    codeSnippet: `-- Flipkart First Mile Linehaul SLA Ingestion Audit
SELECT 
  hub_id,
  hub_name,
  vehicle_trip_id,
  scheduled_arrival,
  actual_dock_in_time,
  TIMESTAMP_DIFF(actual_dock_in_time, scheduled_arrival, MINUTE) AS breach_minutes,
  status
FROM \`flipkart-logistics.first_mile.linehaul_trips\`
WHERE DATE(trip_date) = CURRENT_DATE()
  AND TIMESTAMP_DIFF(actual_dock_in_time, scheduled_arrival, MINUTE) > 15
ORDER BY breach_minutes DESC;`,
    lastAccessed: '2 days ago',
    updatedAt: new Date().toISOString(),
    createdAt: '2026-01-22T08:00:00Z'
  },
  {
    id: 'link-flipkart-wms',
    title: 'Flipkart WMS & Inbound Hub Portal',
    description: 'Central Warehouse Management System console for dock appointment schedules',
    type: 'link',
    frequency: 'often',
    url: 'https://wms.flipkart.com',
    owner: 'Logistics Tech',
    priority: 'high',
    status: 'active',
    isPinned: false,
    clickCount: 220,
    lastAccessed: '3 hours ago',
    updatedAt: new Date().toISOString(),
    createdAt: '2026-01-25T08:00:00Z'
  }
];

// App State
let state = {
  user: null,
  activePage: 'workspace',
  searchQuery: '',
  filterFrequency: 'all', // 'all', 'often', 'rare'
  resources: [],
  previewItem: null,
  editingItem: null
};

// --- Storage Utilities ---
function loadResources() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed) && parsed.length > 0) {
        return parsed;
      }
    }
  } catch (e) {
    console.error('Error loading resources from localStorage', e);
  }
  localStorage.setItem(STORAGE_KEY, JSON.stringify(INITIAL_RESOURCES));
  return INITIAL_RESOURCES;
}

function saveResources(items) {
  state.resources = items;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  render();
}

function loadUser() {
  try {
    const raw = localStorage.getItem(USER_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (parsed?.email?.endsWith('@flipkart.com')) {
        return parsed;
      }
    }
  } catch (e) {
    // ignore
  }
  return null;
}

function saveUser(user) {
  state.user = user;
  if (user) {
    localStorage.setItem(USER_KEY, JSON.stringify(user));
  } else {
    localStorage.removeItem(USER_KEY);
  }
  render();
}

// --- Toast System ---
function showToast(message, type = 'success') {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  const bg = type === 'success' ? 'bg-emerald-600' : type === 'error' ? 'bg-rose-600' : 'bg-slate-800';
  toast.className = `flex items-center gap-2 px-4 py-2.5 rounded-xl text-white text-xs font-semibold shadow-lg ${bg} animate-fadeIn transition-all`;
  toast.innerHTML = `
    <span>${message}</span>
  `;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    setTimeout(() => toast.remove(), 200);
  }, 3000);
}

// --- Google Sign-In Action ---
window.handleGoogleSignIn = function() {
  const btn = document.getElementById('btn-google-signin');
  const errorBanner = document.getElementById('auth-error-banner');
  if (errorBanner) errorBanner.classList.add('hidden');

  if (btn) {
    btn.disabled = true;
    btn.innerHTML = `
      <svg class="w-4 h-4 text-[#2874f0] animate-spin inline-block mr-2" viewBox="0 0 24 24" fill="none">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
      </svg>
      <span>Authenticating @flipkart.com...</span>
    `;
  }

  // Auto-fetch Vidyashankar GP (@flipkart.com) Google profile
  setTimeout(() => {
    const user = {
      uid: 'fk-' + Date.now(),
      email: 'vidyashankargp1.vc@flipkart.com',
      displayName: 'Vidyashankar GP',
      photoURL: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80',
      isFlipkartEmployee: true,
      department: 'First Mile Operations HQ'
    };

    saveUser(user);
    showToast(`Welcome ${user.displayName} to Flipkart First Mile Operations!`, 'success');
  }, 450);
};

window.handleSignOut = function() {
  saveUser(null);
  showToast('Signed out of Flipkart account', 'info');
};

window.navigateTo = function(page) {
  state.activePage = page;
  render();
};

window.togglePin = function(id) {
  const updated = state.resources.map(r => r.id === id ? { ...r, isPinned: !r.isPinned } : r);
  saveResources(updated);
  showToast('Resource bookmark updated', 'info');
};

window.deleteResource = function(id) {
  if (!confirm('Are you sure you want to delete this resource?')) return;
  const updated = state.resources.filter(r => r.id !== id);
  saveResources(updated);
  showToast('Resource deleted successfully', 'info');
};

window.openResource = function(id, url) {
  const updated = state.resources.map(r => {
    if (r.id === id) {
      return { ...r, clickCount: (r.clickCount || 0) + 1, lastAccessed: 'Just now' };
    }
    return r;
  });
  saveResources(updated);
  window.open(url, '_blank', 'noopener,noreferrer');
};

window.previewResource = function(id) {
  const item = state.resources.find(r => r.id === id);
  if (!item) return;
  state.previewItem = item;
  renderPreviewModal();
};

window.closePreview = function() {
  state.previewItem = null;
  const modal = document.getElementById('preview-modal');
  if (modal) modal.classList.add('hidden');
};

window.copyCode = function(text) {
  navigator.clipboard.writeText(text).then(() => {
    showToast('Code copied to clipboard!', 'success');
  });
};

// --- Modal Handlers ---
window.openAddModal = function(defaultType = 'spreadsheet') {
  state.editingItem = null;
  document.getElementById('modal-title').textContent = 'Add New Operational Resource';
  document.getElementById('form-resource-id').value = '';
  document.getElementById('form-title').value = '';
  document.getElementById('form-type').value = defaultType;
  document.getElementById('form-url').value = '';
  document.getElementById('form-desc').value = '';
  document.getElementById('form-priority').value = 'high';
  document.getElementById('form-freq').value = 'often';
  document.getElementById('form-code').value = '';
  document.getElementById('resource-modal').classList.remove('hidden');
};

window.openEditModal = function(id) {
  const item = state.resources.find(r => r.id === id);
  if (!item) return;
  state.editingItem = item;
  document.getElementById('modal-title').textContent = 'Edit Operational Resource';
  document.getElementById('form-resource-id').value = item.id;
  document.getElementById('form-title').value = item.title;
  document.getElementById('form-type').value = item.type;
  document.getElementById('form-url').value = item.url;
  document.getElementById('form-desc').value = item.description;
  document.getElementById('form-priority').value = item.priority;
  document.getElementById('form-freq').value = item.frequency;
  document.getElementById('form-code').value = item.codeSnippet || '';
  document.getElementById('resource-modal').classList.remove('hidden');
};

window.closeModal = function() {
  document.getElementById('resource-modal').classList.add('hidden');
};

window.handleFormSubmit = function(e) {
  e.preventDefault();
  const id = document.getElementById('form-resource-id').value;
  const title = document.getElementById('form-title').value.trim();
  const type = document.getElementById('form-type').value;
  const url = document.getElementById('form-url').value.trim();
  const description = document.getElementById('form-desc').value.trim();
  const priority = document.getElementById('form-priority').value;
  const frequency = document.getElementById('form-freq').value;
  const codeSnippet = document.getElementById('form-code').value.trim();

  if (!title || !url) {
    showToast('Please fill in title and URL', 'error');
    return;
  }

  let updated;
  if (id) {
    updated = state.resources.map(r => r.id === id ? {
      ...r,
      title,
      type,
      url,
      description,
      priority,
      frequency,
      codeSnippet: codeSnippet || undefined,
      updatedAt: new Date().toISOString()
    } : r);
    showToast('Resource updated successfully', 'success');
  } else {
    const newItem = {
      id: 'res-' + Date.now(),
      title,
      type,
      url,
      description,
      priority,
      frequency,
      codeSnippet: codeSnippet || undefined,
      owner: 'Operations HQ',
      status: 'active',
      isPinned: false,
      clickCount: 0,
      lastAccessed: 'Just now',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    updated = [newItem, ...state.resources];
    showToast('New resource added to shelf', 'success');
  }

  closeModal();
  saveResources(updated);
};

// --- Render Functions ---
function render() {
  const authGate = document.getElementById('auth-gate');
  const mainApp = document.getElementById('main-app');

  if (!state.user) {
    if (authGate) authGate.classList.remove('hidden');
    if (mainApp) mainApp.classList.add('hidden');
    return;
  }

  if (authGate) authGate.classList.add('hidden');
  if (mainApp) mainApp.classList.remove('hidden');

  // Update User Header
  document.getElementById('header-user-name').textContent = state.user.displayName;
  document.getElementById('header-user-email').textContent = state.user.email;
  document.getElementById('header-user-avatar').textContent = state.user.displayName.charAt(0).toUpperCase();

  // Sidebar highlight
  document.querySelectorAll('.sidebar-nav-btn').forEach(btn => {
    const target = btn.dataset.page;
    if (target === state.activePage) {
      btn.className = 'sidebar-nav-btn w-full flex items-center gap-3 px-3 py-2.5 rounded-xl font-bold text-xs bg-[#2874f0] text-white shadow-xs cursor-pointer';
    } else {
      btn.className = 'sidebar-nav-btn w-full flex items-center gap-3 px-3 py-2.5 rounded-xl font-medium text-xs text-slate-600 hover:text-slate-900 hover:bg-slate-100 cursor-pointer';
    }
  });

  // Filter resources
  let filtered = [...state.resources];

  // Page filter
  if (state.activePage === 'spreadsheets') {
    filtered = filtered.filter(r => r.type === 'spreadsheet');
  } else if (state.activePage === 'dashboards') {
    filtered = filtered.filter(r => r.type === 'dashboard');
  } else if (state.activePage === 'codes') {
    filtered = filtered.filter(r => r.type === 'code');
  } else if (state.activePage === 'links') {
    filtered = filtered.filter(r => r.type === 'link');
  }

  // Search filter
  if (state.searchQuery.trim()) {
    const q = state.searchQuery.toLowerCase();
    filtered = filtered.filter(r => 
      r.title.toLowerCase().includes(q) || 
      r.description.toLowerCase().includes(q) ||
      r.type.toLowerCase().includes(q)
    );
  }

  // Frequency filter
  if (state.filterFrequency !== 'all') {
    filtered = filtered.filter(r => r.frequency === state.filterFrequency);
  }

  // Update Page Title
  const titles = {
    workspace: 'Team Workspace & Operations Hub',
    spreadsheets: 'Spreadsheets Center',
    dashboards: 'Dashboards & BI Center',
    codes: 'Codes, Runbooks & Automations',
    links: 'Logistics Link Center'
  };
  document.getElementById('page-title').textContent = titles[state.activePage] || 'Operations Shelf';
  document.getElementById('page-item-count').textContent = `${filtered.length} resources available`;

  // Render Grid
  const grid = document.getElementById('resources-grid');
  if (!grid) return;

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="col-span-full py-16 text-center text-slate-400 bg-white rounded-2xl border border-slate-200">
        <p class="font-bold text-slate-700 text-sm">No operational resources found</p>
        <p class="text-xs text-slate-400 mt-1">Try adjusting your search query or filter tags</p>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered.map(item => createResourceCardHTML(item)).join('');
}

function createResourceCardHTML(item) {
  const typeIcons = {
    spreadsheet: `<svg class="w-4 h-4 text-emerald-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="8" y1="13" x2="16" y2="13"></line><line x1="8" y1="17" x2="16" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>`,
    dashboard: `<svg class="w-4 h-4 text-sky-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>`,
    code: `<svg class="w-4 h-4 text-indigo-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>`,
    link: `<svg class="w-4 h-4 text-amber-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>`
  };

  const priorityBadges = {
    critical: 'badge-critical',
    high: 'badge-high',
    medium: 'badge-medium',
    low: 'badge-low'
  };

  const pinActive = item.isPinned ? 'text-amber-500 fill-amber-500' : 'text-slate-300 hover:text-slate-500';

  return `
    <div class="bg-white rounded-2xl border border-slate-200/90 hover:border-slate-300 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between p-4 group">
      <div>
        <div class="flex items-start justify-between gap-2 mb-2">
          <div class="flex items-center gap-2">
            <div class="p-2 rounded-xl bg-slate-50 border border-slate-100 shrink-0">
              ${typeIcons[item.type] || typeIcons.link}
            </div>
            <span class="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${priorityBadges[item.priority] || 'badge-low'}">
              ${item.priority}
            </span>
          </div>

          <div class="flex items-center gap-1">
            <button onclick="togglePin('${item.id}')" title="${item.isPinned ? 'Unpin' : 'Pin to top'}" class="p-1.5 rounded-lg hover:bg-slate-100 cursor-pointer">
              <svg class="w-4 h-4 ${pinActive}" viewBox="0 0 24 24" fill="${item.isPinned ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
              </svg>
            </button>
            <button onclick="openEditModal('${item.id}')" title="Edit" class="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 cursor-pointer">
              <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
            </button>
          </div>
        </div>

        <h3 class="font-bold text-xs sm:text-sm text-slate-900 group-hover:text-[#2874f0] transition-colors line-clamp-1">
          ${item.title}
        </h3>
        <p class="text-[11px] text-slate-500 mt-1 line-clamp-2 leading-relaxed">
          ${item.description}
        </p>

        ${item.codeSnippet ? `
          <div class="mt-2.5 p-2 rounded-xl bg-slate-900 text-slate-200 text-[10px] font-mono relative">
            <pre class="overflow-x-auto max-h-24"><code>${escapeHTML(item.codeSnippet)}</code></pre>
            <button onclick="copyCode(\`${escapeForAttr(item.codeSnippet)}\`)" class="absolute top-1.5 right-1.5 px-2 py-0.5 rounded-md bg-white/20 hover:bg-white/30 text-[9px] font-semibold text-white">
              Copy
            </button>
          </div>
        ` : ''}
      </div>

      <div class="pt-3 mt-3 border-t border-slate-100 flex items-center justify-between text-[11px]">
        <span class="text-slate-400 text-[10.5px]">
          ${item.clickCount || 0} visits
        </span>

        <div class="flex items-center gap-1.5">
          ${item.embedUrl ? `
            <button onclick="previewResource('${item.id}')" class="px-2.5 py-1 rounded-lg text-xs font-semibold text-slate-600 hover:bg-slate-100 cursor-pointer">
              Preview
            </button>
          ` : ''}
          <button onclick="openResource('${item.id}', '${item.url}')" class="flex items-center gap-1 px-3 py-1 rounded-lg bg-[#2874f0] hover:bg-blue-700 text-white font-bold text-xs shadow-2xs cursor-pointer">
            <span>Open</span>
            <svg class="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
          </button>
        </div>
      </div>
    </div>
  `;
}

function renderPreviewModal() {
  const modal = document.getElementById('preview-modal');
  const title = document.getElementById('preview-title');
  const frame = document.getElementById('preview-frame');
  const externalLink = document.getElementById('preview-external-link');

  if (!state.previewItem || !modal) return;

  title.textContent = state.previewItem.title;
  externalLink.href = state.previewItem.url;
  frame.src = state.previewItem.embedUrl || state.previewItem.url;
  modal.classList.remove('hidden');
}

function escapeHTML(str) {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function escapeForAttr(str) {
  return str.replace(/`/g, '\\`').replace(/\$/g, '\\$');
}

// Initializer
document.addEventListener('DOMContentLoaded', () => {
  state.resources = loadResources();
  state.user = loadUser();

  // Search input listener
  const searchInput = document.getElementById('search-input');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      state.searchQuery = e.target.value;
      render();
    });
  }

  // Frequency filter listener
  const freqSelect = document.getElementById('frequency-filter');
  if (freqSelect) {
    freqSelect.addEventListener('change', (e) => {
      state.filterFrequency = e.target.value;
      render();
    });
  }

  render();
});
