package com.GFT.cobranca.model;

public enum StatusTitulo {
	CD("Cartao de debito"),
	CC("Cartao de credito");
	
	
 private String conta;
 
  StatusTitulo(String conta){
	  this.conta = conta;
  }
  
  public String getConta() {
	
	  return conta;
  }

    
}
