/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
  /*
   */

  tutorialSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Devices',
      items: [
        'devices/thf_sec_cw',
        'devices/magritek_nmr_cw',
        'devices/thf_sec_dmac_cs',
        'devices/low_temp_dsc_cs',
        'devices/ir_alpha_cs',
        'devices/eis_cw',
        'devices/ir_vertex_cw',
        'devices/tga_cw',
      ],
    },
  ],
};

module.exports = sidebars;
