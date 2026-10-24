import test from 'node:test';
import assert from 'node:assert/strict';
import {
  getHardwareBySlug,
  getPublishedHardware,
  getAllSoftwareProducts,
  getSoftwareProductBySlug,
  formatPhoneForHref,
  generateMailtoLink,
  validateContactForm,
  getAllServices,
  getServiceById,
  getServicesByCategory
} from './product-utils';
import { COMPANY_INFO } from '../data/products';
import { TEAM_MEMBERS, TOTAL_TEAM_SIZE } from '../data/team';

test('getHardwareBySlug returns correct hardware family for valid slug', () => {
  const dcnProduct = getHardwareBySlug('dcn-heat-controller');
  assert.ok(dcnProduct);
  assert.equal(dcnProduct?.name, 'DCN & Heat Controller');
  assert.equal(dcnProduct?.slug, 'dcn-heat-controller');

  const unknown = getHardwareBySlug('non-existent');
  assert.equal(unknown, undefined);
});

test('hardware catalogue contains only DCN & Heat Controller', () => {
  const hardware = getPublishedHardware();
  assert.equal(hardware.length, 1);
  assert.equal(hardware[0].slug, 'dcn-heat-controller');
});

test('getAllSoftwareProducts returns all 9 software solutions in exact order', () => {
  const software = getAllSoftwareProducts();
  assert.equal(software.length, 9);
  
  const expectedSlugs = [
    'fluxora',
    'equipoise',
    'smolder',
    'postern',
    'clime',
    'manifest',
    'foundry',
    'herald',
    'census'
  ];
  
  software.forEach((s, idx) => {
    assert.equal(s.slug, expectedSlugs[idx], `Software at index ${idx} must be ${expectedSlugs[idx]}`);
  });

  // Verify Postern appears only once
  const posternMatches = software.filter((s) => s.slug === 'postern');
  assert.equal(posternMatches.length, 1);
});

test('getSoftwareProductBySlug retrieves detailed software records', () => {
  const fluxora = getSoftwareProductBySlug('fluxora');
  assert.ok(fluxora);
  assert.equal(fluxora?.name, 'Fluxora');
  assert.equal(fluxora?.purpose, 'Industrial IoT Blade Heating System');

  const census = getSoftwareProductBySlug('census');
  assert.ok(census);
  assert.equal(census?.name, 'Census');
  assert.equal(census?.purpose, 'Video Analytics');
});

test('getAllServices and getServiceById retrieve verified industrial services', () => {
  const services = getAllServices();
  assert.equal(services.length >= 4, true);

  const pidService = getServiceById('pid-interfacing');
  assert.ok(pidService);
  assert.equal(pidService?.title, 'Plant Floor PID Interfacing & Compatibility Check');
  assert.equal(pidService?.category, 'Integration');

  const engineeringServices = getServicesByCategory('Engineering');
  assert.equal(engineeringServices.length >= 1, true);
  assert.equal(engineeringServices.some(s => s.id === 'consultation-architecture'), true);

  const allServices = getServicesByCategory('All');
  assert.equal(allServices.length, services.length);
});

test('formatPhoneForHref cleans numbers properly', () => {
  assert.equal(formatPhoneForHref('+91-8320845947'), 'tel:+918320845947');
});

test('generateMailtoLink crafts RFC compliant mailto URL', () => {
  const link = generateMailtoLink('emertechelectronics@gmail.com', 'Enquiry: Fluxora', [
    { label: 'Name', value: 'Rajesh Patel' },
    { label: 'Requirement', value: '10 DCN units' }
  ]);
  assert.equal(link.startsWith('mailto:emertechelectronics@gmail.com?subject=Enquiry%3A%20Fluxora'), true);
  assert.equal(link.includes('Rajesh%20Patel'), true);
});

test('validateContactForm rejects invalid inputs and accepts valid data', () => {
  const emptyValidation = validateContactForm({
    fullName: '',
    email: 'bad-email',
    phone: '12',
    companyName: '',
    productInterest: 'Fluxora',
    inquiryType: 'Quotation',
    message: 'short'
  });
  assert.equal(emptyValidation.isValid, false);
  assert.ok(emptyValidation.errors.fullName);
  assert.ok(emptyValidation.errors.email);
  assert.ok(emptyValidation.errors.phone);
  assert.ok(emptyValidation.errors.message);

  const validValidation = validateContactForm({
    fullName: 'Rajesh Patel',
    email: 'rajesh@windblade-mfg.com',
    phone: '+91 9876543210',
    companyName: 'Apex Wind Composites',
    productInterest: 'DCN & Heat Controller',
    inquiryType: 'Quotation',
    message: 'Requesting quotation for 80m blade mould heating system retrofit with DCN edge units.'
  });
  assert.equal(validValidation.isValid, true);
  assert.equal(Object.keys(validValidation.errors).length, 0);
});

test('COMPANY_INFO has updated company name Emertech Electronics', () => {
  assert.equal(COMPANY_INFO.name, 'Emertech Electronics');
});

test('TEAM_MEMBERS contains exactly the 6 specified members and 15 total team size', () => {
  assert.equal(TOTAL_TEAM_SIZE, 15);
  assert.equal(TEAM_MEMBERS.length, 6);

  const cto = TEAM_MEMBERS.find((m: any) => m.name === 'Dishant Shah');
  assert.ok(cto);
  assert.equal(cto.designation, 'Chief Technology Officer (CTO)');
  assert.equal(cto.email, 'dishant.shah@emertechelectronics.in');

  const names = TEAM_MEMBERS.map((m: any) => m.name);
  assert.deepEqual(names, [
    'Dishant Shah',
    'Dishant Nalwaya',
    'Hemant Harlalka',
    'Mohit Kumar',
    'Nitish Kumar',
    'Aniket Kumar'
  ]);
});

test('HARDWARE_PRODUCTS_DATA contains verified DCN and Heat Controller specs', async () => {
  const { HARDWARE_PRODUCTS_DATA, COMPATIBLE_DEVICES, HARDWARE_DOWNLOADS, HARDWARE_FAQS } = await import('../data/hardware-specs');
  
  assert.ok(HARDWARE_PRODUCTS_DATA.dcn);
  assert.equal(HARDWARE_PRODUCTS_DATA.dcn.name, 'DCN Edge Node');
  assert.equal(HARDWARE_PRODUCTS_DATA.dcn.modelCode, 'DCN-4R-W-24V');
  assert.equal(HARDWARE_PRODUCTS_DATA.dcn.keySpecs.length >= 6, true);
  assert.equal(HARDWARE_PRODUCTS_DATA.dcn.specGroups.length, 7);

  assert.ok(HARDWARE_PRODUCTS_DATA['heat-controller']);
  assert.equal(HARDWARE_PRODUCTS_DATA['heat-controller'].name, 'Multi-Zone Heat Controller');
  assert.equal(HARDWARE_PRODUCTS_DATA['heat-controller'].modelCode, 'HC-4Z-230V-SOP');

  // Verify compatibility list
  assert.equal(COMPATIBLE_DEVICES.length >= 6, true);
  const autonics = COMPATIBLE_DEVICES.find(d => d.testedModels.includes('Autonics'));
  assert.ok(autonics);
  assert.equal(autonics.status, 'Verified');

  // Verify downloads
  assert.equal(HARDWARE_DOWNLOADS.length >= 5, true);
  const brochureDoc = HARDWARE_DOWNLOADS.find(d => d.id === 'datasheet');
  assert.ok(brochureDoc);
  assert.equal(brochureDoc.status, 'available');

  // Verify FAQs
  assert.equal(HARDWARE_FAQS.length >= 7, true);
});
