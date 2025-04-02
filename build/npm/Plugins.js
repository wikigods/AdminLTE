'use strict'

const Plugins = [
  // jQuery
  {
    from: 'node_modules/jquery/dist',
    to: 'plugins/jquery'
  },
  // Popper
  {
    from: 'node_modules/@popperjs/core/dist/umd/popper.min.js',
    to: 'plugins/popperjs'
  },
  // Bootstrap
  {
    from: 'node_modules/bootstrap/dist/js',
    to: 'plugins/bootstrap/js'
  },
  // Font Awesome
  {
    from: 'node_modules/@fortawesome/fontawesome-free/css',
    to: 'plugins/fontawesome-free/css'
  },
  {
    from: 'node_modules/@fortawesome/fontawesome-free/webfonts',
    to: 'plugins/fontawesome-free/webfonts'
  },
  // overlayScrollbars
  {
    from: 'node_modules/overlayscrollbars',
    to: 'plugins/overlayScrollbars/js'
  },
  {
    from: 'node_modules/overlayscrollbars/styles',
    to: 'plugins/overlayScrollbars/css'
  },
  // Moment
  {
    from: 'node_modules/moment/min',
    to: 'plugins/moment'
  },
  {
    from: 'node_modules/moment/locale',
    to: 'plugins/moment/locale'
  },
  // DataTables
  {
    from: 'node_modules/pdfmake/build',
    to: 'plugins/pdfmake'
  },
  {
    from: 'node_modules/jszip/dist',
    to: 'plugins/jszip'
  },
  {
    from: 'node_modules/datatables.net/js',
    to: 'plugins/datatables'
  },
  {
    from: 'node_modules/datatables.net-bs5/js',
    to: 'plugins/datatables-bs5/js'
  },
  {
    from: 'node_modules/datatables.net-bs5/css',
    to: 'plugins/datatables-bs5/css'
  },
  {
    from: 'node_modules/datatables.net-autofill/js',
    to: 'plugins/datatables-autofill/js'
  },
  {
    from: 'node_modules/datatables.net-autofill-bs5/js',
    to: 'plugins/datatables-autofill/js'
  },
  {
    from: 'node_modules/datatables.net-autofill-bs5/css',
    to: 'plugins/datatables-autofill/css'
  },
  {
    from: 'node_modules/datatables.net-buttons/js',
    to: 'plugins/datatables-buttons/js'
  },
  {
    from: 'node_modules/datatables.net-buttons-bs5/js',
    to: 'plugins/datatables-buttons/js'
  },
  {
    from: 'node_modules/datatables.net-buttons-bs5/css',
    to: 'plugins/datatables-buttons/css'
  },
  {
    from: 'node_modules/datatables.net-colreorder/js',
    to: 'plugins/datatables-colreorder/js'
  },
  {
    from: 'node_modules/datatables.net-colreorder-bs5/js',
    to: 'plugins/datatables-colreorder/js'
  },
  {
    from: 'node_modules/datatables.net-colreorder-bs5/css',
    to: 'plugins/datatables-colreorder/css'
  },
  {
    from: 'node_modules/datatables.net-fixedcolumns/js',
    to: 'plugins/datatables-fixedcolumns/js'
  },
  {
    from: 'node_modules/datatables.net-fixedcolumns-bs5/js',
    to: 'plugins/datatables-fixedcolumns/js'
  },
  {
    from: 'node_modules/datatables.net-fixedcolumns-bs5/css',
    to: 'plugins/datatables-fixedcolumns/css'
  },
  {
    from: 'node_modules/datatables.net-fixedheader/js',
    to: 'plugins/datatables-fixedheader/js'
  },
  {
    from: 'node_modules/datatables.net-fixedheader-bs5/js',
    to: 'plugins/datatables-fixedheader/js'
  },
  {
    from: 'node_modules/datatables.net-fixedheader-bs5/css',
    to: 'plugins/datatables-fixedheader/css'
  },
  {
    from: 'node_modules/datatables.net-keytable/js',
    to: 'plugins/datatables-keytable/js'
  },
  {
    from: 'node_modules/datatables.net-keytable-bs5/js',
    to: 'plugins/datatables-keytable/js'
  },
  {
    from: 'node_modules/datatables.net-keytable-bs5/css',
    to: 'plugins/datatables-keytable/css'
  },
  {
    from: 'node_modules/datatables.net-responsive/js',
    to: 'plugins/datatables-responsive/js'
  },
  {
    from: 'node_modules/datatables.net-responsive-bs5/js',
    to: 'plugins/datatables-responsive/js'
  },
  {
    from: 'node_modules/datatables.net-responsive-bs5/css',
    to: 'plugins/datatables-responsive/css'
  },
  {
    from: 'node_modules/datatables.net-rowgroup/js',
    to: 'plugins/datatables-rowgroup/js'
  },
  {
    from: 'node_modules/datatables.net-rowgroup-bs5/js',
    to: 'plugins/datatables-rowgroup/js'
  },
  {
    from: 'node_modules/datatables.net-rowgroup-bs5/css',
    to: 'plugins/datatables-rowgroup/css'
  },
  {
    from: 'node_modules/datatables.net-rowreorder-bs5/js',
    to: 'plugins/js'
  },
  {
    from: 'node_modules/datatables.net-rowreorder-bs5/css',
    to: 'plugins/css'
  },
  {
    from: 'node_modules/datatables.net-scroller/js',
    to: 'plugins/datatables-scroller/js'
  },
  {
    from: 'node_modules/datatables.net-scroller-bs5/js',
    to: 'plugins/datatables-scroller/js'
  },
  {
    from: 'node_modules/datatables.net-scroller-bs5/css',
    to: 'plugins/datatables-scroller/css'
  },
  {
    from: 'node_modules/datatables.net-searchbuilder/js',
    to: 'plugins/datatables-searchbuilder/js'
  },
  {
    from: 'node_modules/datatables.net-searchbuilder-bs5/js',
    to: 'plugins/datatables-searchbuilder/js'
  },
  {
    from: 'node_modules/datatables.net-searchbuilder-bs5/css',
    to: 'plugins/datatables-searchbuilder/css'
  },
  {
    from: 'node_modules/datatables.net-searchpanes/js',
    to: 'plugins/datatables-searchpanes/js'
  },
  {
    from: 'node_modules/datatables.net-searchpanes-bs5/js',
    to: 'plugins/datatables-searchpanes/js'
  },
  {
    from: 'node_modules/datatables.net-searchpanes-bs5/css',
    to: 'plugins/datatables-searchpanes/css'
  },
  {
    from: 'node_modules/datatables.net-select/js',
    to: 'plugins/datatables-select/js'
  },
  {
    from: 'node_modules/datatables.net-select-bs5/js',
    to: 'plugins/datatables-select/js'
  },
  {
    from: 'node_modules/datatables.net-select-bs5/css',
    to: 'plugins/datatables-select/css'
  },
  // SweetAlert2
  {
    from: 'node_modules/sweetalert2/dist/',
    to: 'plugins/sweetalert2'
  },
]

module.exports = Plugins
