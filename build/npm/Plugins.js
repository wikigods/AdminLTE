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
  // Chart.js
  {
    from: 'node_modules/chart.js/dist/',
    to: 'plugins/chart.js'
  },
  // jQuery UI
  {
    from: 'node_modules/jquery-ui-dist/',
    to: 'plugins/jquery-ui'
  },
  // Flot
  {
    from: 'node_modules/flot/dist/es5/',
    to: 'plugins/flot'
  },
  {
    from: 'node_modules/flot/source/',
    to: 'plugins/flot/plugins'
  },
  // Summernote
  {
    from: 'node_modules/summernote/dist/',
    to: 'plugins/summernote'
  },
  // Bootstrap Slider
  {
    from: 'node_modules/bootstrap-slider/dist/',
    to: 'plugins/bootstrap-slider'
  },
  {
    from: 'node_modules/bootstrap-slider/dist/css',
    to: 'plugins/bootstrap-slider/css'
  },
  // Bootstrap Colorpicker
  {
    from: 'node_modules/bootstrap-colorpicker/dist/js',
    to: 'plugins/bootstrap-colorpicker/js'
  },
  {
    from: 'node_modules/bootstrap-colorpicker/dist/css',
    to: 'plugins/bootstrap-colorpicker/css'
  },
  // Tempusdominus Bootstrap 4
  {
    from: 'node_modules/tempusdominus-bootstrap-4/build/js',
    to: 'plugins/tempusdominus-bootstrap-4/js'
  },
  {
    from: 'node_modules/tempusdominus-bootstrap-4/build/css',
    to: 'plugins/tempusdominus-bootstrap-4/css'
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
  // FastClick
  {
    from: 'node_modules/fastclick/lib',
    to: 'plugins/fastclick'
  },
  // Date Range Picker
  {
    from: 'node_modules/daterangepicker/',
    to: 'plugins/daterangepicker'
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
    from: 'node_modules/datatables.net-rowreorder/js',
    to: 'plugins/datatables-rowreorder/js'
  },
  {
    from: 'node_modules/datatables.net-rowreorder-bs5/js',
    to: 'plugins/datatables-rowreorder/js'
  },
  {
    from: 'node_modules/datatables.net-rowreorder-bs5/css',
    to: 'plugins/datatables-rowreorder/css'
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

  // Fullcalendar
  {
    from: 'node_modules/fullcalendar/',
    to: 'plugins/fullcalendar'
  },
  // icheck bootstrap
  {
    from: 'node_modules/icheck-bootstrap/',
    to: 'plugins/icheck-bootstrap'
  },
  // inputmask
  {
    from: 'node_modules/inputmask/dist/',
    to: 'plugins/inputmask'
  },
  // ion-rangeslider
  {
    from: 'node_modules/ion-rangeslider/',
    to: 'plugins/ion-rangeslider'
  },
  // JQVMap (jqvmap-novulnerability)
  {
    from: 'node_modules/jqvmap-novulnerability/dist/',
    to: 'plugins/jqvmap'
  },
  // jQuery Mapael
  {
    from: 'node_modules/jquery-mapael/js/',
    to: 'plugins/jquery-mapael'
  },
  // Raphael
  {
    from: 'node_modules/raphael/',
    to: 'plugins/raphael'
  },
  // jQuery Mousewheel
  {
    from: 'node_modules/jquery-mousewheel/',
    to: 'plugins/jquery-mousewheel'
  },
  // jQuery Knob
  {
    from: 'node_modules/jquery-knob-chif/dist/',
    to: 'plugins/jquery-knob'
  },
  // pace-progress
  {
    from: 'node_modules/@lgaitan/pace-progress/dist/',
    to: 'plugins/pace-progress'
  },
  // Select2
  {
    from: 'node_modules/select2/dist/',
    to: 'plugins/select2'
  },
  {
    from: 'node_modules/@ttskch/select2-bootstrap4-theme/dist/',
    to: 'plugins/select2-bootstrap4-theme'
  },
  // Sparklines
  {
    from: 'node_modules/sparklines/source/',
    to: 'plugins/sparklines'
  },
  // SweetAlert2
  {
    from: 'node_modules/sweetalert2/dist/',
    to: 'plugins/sweetalert2'
  },
  // Toastr
  {
    from: 'node_modules/toastr/build/',
    to: 'plugins/toastr'
  },
  // jsGrid
  {
    from: 'node_modules/jsgrid/dist',
    to: 'plugins/jsgrid'
  },
  {
    from: 'node_modules/jsgrid/demos/db.js',
    to: 'plugins/jsgrid/demos/db.js'
  },
  // flag-icon-css
  {
    from: 'node_modules/flag-icon-css/css',
    to: 'plugins/flag-icon-css/css'
  },
  {
    from: 'node_modules/flag-icon-css/flags',
    to: 'plugins/flag-icon-css/flags'
  },
  // bootstrap4-duallistbox
  {
    from: 'node_modules/bootstrap4-duallistbox/dist',
    to: 'plugins/bootstrap4-duallistbox/'
  },
  // filterizr
  {
    from: 'node_modules/filterizr/dist',
    to: 'plugins/filterizr/'
  },
  // ekko-lightbox
  {
    from: 'node_modules/ekko-lightbox/dist',
    to: 'plugins/ekko-lightbox/'
  },
  // bootstrap-switch
  {
    from: 'node_modules/bootstrap-switch/dist',
    to: 'plugins/bootstrap-switch/'
  },
  // jQuery Validate
  {
    from: 'node_modules/jquery-validation/dist/',
    to: 'plugins/jquery-validation'
  },
  // bs-custom-file-input
  {
    from: 'node_modules/bs-custom-file-input/dist/',
    to: 'plugins/bs-custom-file-input'
  },
  // bs-stepper
  {
    from: 'node_modules/bs-stepper/dist/',
    to: 'plugins/bs-stepper'
  },
  // CodeMirror
  {
    from: 'node_modules/codemirror/dist/',
    to: 'plugins/codemirror'
  },
  {
    from: 'node_modules/codemirror/addon/',
    to: 'plugins/codemirror/addon'
  },
  {
    from: 'node_modules/codemirror/keymap/',
    to: 'plugins/codemirror/keymap'
  },
  {
    from: 'node_modules/codemirror/mode/',
    to: 'plugins/codemirror/mode'
  },
  {
    from: 'node_modules/codemirror/theme/',
    to: 'plugins/codemirror/theme'
  },
  // dropzonejs
  {
    from: 'node_modules/dropzone/dist/',
    to: 'plugins/dropzone'
  },
  // uPlot
  {
    from: 'node_modules/uplot/dist/',
    to: 'plugins/uplot'
  }
]

module.exports = Plugins
