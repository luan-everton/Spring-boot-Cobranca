$('#confirmacaoExclusaoModal').on('show.bs.modal',function(event){
	
	var button = $(event.relatedTarget);
	var codigoTitulo = button.data('codigo');
	var contaTitulo = button.data('conta');
	
	var modal = $(this);
	var form = modal.find('form');
	var action = form.data('url-base');
	if (!action.endsWith('/')){
		action+='/';
	}
form.attr('action', action + codigoTitulo);

});
	
	
	
	
	
	
	

