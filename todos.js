//check off specific todos by clicking
//below statement says when an li is clicked inside of ul excute the code
$("ul").on("click","li", function(){
	//this refers to the specific li that was clicked
	$(this).toggleClass("completed");	
});

//click on x to delete todo
$("ul").on("click","span",function(event){
	//this is the span we've clicked on, below statement removes the parent element ,i.e., in this case
	$(this).parent().fadeOut(500,function(){
		//inside fadeout function this refers to the li the not the span
		$(this).remove();
	});
	//it is a jquery method that stop bubbling of the event to the parent element
	event.stopPropagation();
});
//event bubbling. the event is initially triggered on the selected element but then it bubbles upto the parent element

$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		//grabbing new todo text from input
		var todoText = $(this).val();
		$(this).val("");
		//create a new li and add to ul
		$("ul").append("<li><span><i class='fa fa-trash'></i> </span>" + todoText + "</li>");
	}
});

$(".fa-edit").click(function(){
	$("input[type='text']").fadeToggle();
});