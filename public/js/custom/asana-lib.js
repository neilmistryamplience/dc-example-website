drawAsanaData = function() {
    var tid = $(".amp-asana-container").data("tid");
    if (tid) {
        $.ajax({
            type: "GET",
            url: 'https://app.asana.com/api/1.0/tasks/'+tid,
            data: {},
            beforeSend: function(xhr) {
                xhr.setRequestHeader('Authorization', "Bearer 0/e11a22a57e5428f86761096850bcab9c");
            },
            success: function(data) {
                console.log(data);
                if (data && data.data) {

                    var holder = document.getElementById('asana');
                    tbl = document.createElement('table');
                    tbl.style.width = '100%';
                    tbl.style.border = '1px solid black';

                    var createMyTableRow = function(title, data) {
                        var tr = tbl.insertRow();
                        var td1 = tr.insertCell();
                        td1.style.border = '1px solid black';
                        td1.appendChild(document.createTextNode(title));
                        var td2 = tr.insertCell();
                        td2.style.border = '1px solid black';
                        td2.appendChild(document.createTextNode(data));
                    }
                    if (data.data.name) createMyTableRow('Name:', data.data.name);
                    if (data.data.notes) createMyTableRow('Notes:', data.data.notes);
                    if (data.data.workspace && data.data.workspace.name) createMyTableRow('Workspace:', data.data.workspace.name);
                    if (data.data.assignee) createMyTableRow('Assignee:', data.data.assignee.name);
                    if (data.data.assignee) createMyTableRow('Status:', data.data.assignee_status);
                    createMyTableRow('Completed:', data.data.completed);
                    createMyTableRow('Due At:', data.data.due_at);
                    createMyTableRow('Due On:', data.data.due_on);

                    holder.appendChild(tbl);
                }

            }
        });

    }
}
drawAsanaData();