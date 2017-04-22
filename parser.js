module.exports = {
    filesChangedEvent: function() {

    },
    upload: function () {        
        let files = document.querySelector('#archiveFiles').files;        
        
        if (files) {
            for (let i = 0; i < files.length; i++) {
                let reader = new FileReader()
                reader.readAsText(files[i])

                reader.onload = function (e) {
                    let text = reader.result;

                    // Removes first line since it contains no valid JSON for us
                    text = text.replace(/[^[]*/i,'')

                    var json = JSON.parse(text)
                }
            }
        }
        else {
            // TODO error message for no files selected
        }
    }
}
