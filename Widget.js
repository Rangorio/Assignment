;(function(global,$){
 
  var Widget=function(text,id){
    return new Widget.init(text,id);
  };
    Widget.prototype={};
    Widget.init=function(text,id){
    var self=this;
    self.text=text;
    self.id='btn';
    var button = global.document.createElement("button");
    button.innerHTML = text;
    button.id=self.id;
    
    var button_place_id = global.document.getElementById(id);
    button_place_id.appendChild(button);
    var html = [
'<div id="myModal" class="modal fade" role="dialog">',
  '<div class="modal-dialog">',

    //<!-- Modal content-->
    '<div class="modal-content">',
      '<div class="modal-header">',
        '<button type="button" class="close" data-dismiss="modal">&times;</button>',
       '<h4 class="modal-title">Modal Header</h4>',
     '</div>',
      '<div class="modal-body">',
       ' <p>Some text in the modal.</p>',
      '</div>',
      '<div class="modal-footer">',
        '<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>',
      '</div>',
    '</div>',

  '</div>',
'</div>'].join('');
var div = document.createElement('div');
    div.setAttribute('class', 'post block bc2');
    div.innerHTML = html;
    global.document.getElementById(id).appendChild(div);
    div.id='modal';
    button.addEventListener ("click", function() {
    
    if(!$){alert("No jquery");}
    else{
    $('#myModal').modal('show');}
     

    });
  }

  Widget.init.prototype=Widget.prototype;
  global.Widget=global.W = Widget;
}(window,jQuery));
