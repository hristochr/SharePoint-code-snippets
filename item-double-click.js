//script for enabling item view with double click
<script>
window.addEventListener('load', function () {
    debugger;
    var rows = document.querySelectorAll('.ms-listviewtable tbody tr');
    for (var i = 0; i < rows.length; i++) {
        rows[i].addEventListener("dblclick", function () {
            var options = {};
      options.title = "TITLE OF YOUR LIST"
      options.url = _spPageContextInfo.webAbsoluteUrl + "/Lists/TITLE OF YOUR LIST/DispForm.aspx?ID=" + this.getAttribute('iid').split(',')[1] + "&IsDlg=1";
      SP.UI.ModalDialog.showModalDialog(options)
        }, true);
    }
});
</script>
