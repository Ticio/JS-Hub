function _(id){
    return document.getElementById(id);	
}

var droppedIn = false;
function drag_start(event) {
    // _('app_status').innerHTML = "Dragging the "+event.target.getAttribute('id');
    event.dataTransfer.dropEffect = "move";
    event.dataTransfer.setData("text", event.target.getAttribute('id') );
}

function drag_enter(event) {
    // _('app_status').innerHTML = "You are dragging over the "+event.target.getAttribute('id');
}

function drag_leave(event) {
    // _('app_status').innerHTML = "You left the "+event.target.getAttribute('id');
}

function drag_drop(event) {
    event.preventDefault(); /* Prevent undesirable default behavior while dropping */
    var elem_id = event.dataTransfer.getData("text");
    event.target.appendChild( _(elem_id) );
    
    // _(elem_id).removeAttribute("draggable");
    // _(elem_id).style.cursor = "default";
    droppedIn = true;
}

function drag_end(event) {
    if(droppedIn == false){
        // _('app_status').innerHTML = "You let the "+event.target.getAttribute('id')+" go.";
    }
    droppedIn = false;
}

function checkAnswer(){

    _("checkButtonDrag").style.display = 'none';

    var correct = -1;
    var wrong = 0;

    for(var i=0; i < _("drop_zone").children.length; i++){

        if(_("drop_zone").children[i].id == "object4" || _("drop_zone").children[i].id == "object1")
        {   
            wrong++;
            _("drop_zone").children[i].style.background = '#8b0000';
            _("drop_zone").children[i].style.color = '#fff';
        }
        else
        {   
            correct++;
            _("drop_zone").children[i].style.background = '#008b00';
            _("drop_zone").children[i].style.color = '#fff';
        }
        _("drop_zone").children[i].removeAttribute("draggable");
        _("drop_zone").children[i].style.cursor = "default";
    }

    var feedback = _("feedback-dragdrop");
    feedback.style.background = '#fff';
    feedback.style.border = '1px solid rgba(0,0,0, 0.5)';
    feedback.style.display = '';
    feedback.innerHTML = "<b style='color: green'>"+correct+" correct answer(s) out of 3</b><br>"+"<b style='color: red'>"+wrong+" incorrect answer(s) out of 2</b><br><p style='color: #000; text-align: center;'>onlistening and onseen are not js events.</p>";
}