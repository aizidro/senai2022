#include<stdio.h>
#include<time.h>
int main(){
	srand(time(NULL));
	int matriz[3][3];
	int i, j, maior = 0, linha = 0, coluna = 0;
	//Processamento (Preencher a matriz com n�meros aleat�rios)
	for(i = 0; i < 3; i++)
		for(j = 0; j < 3; j++)
			matriz[i][j] = rand()%10;
	//Sa�da
	for(i = 0; i < 3; i++){
		for(j = 0; j < 3; j++){
			printf("[%d]",matriz[i][j]);
			//Pegar a posi��o do maior
			if(matriz[i][j]>maior){
				maior = matriz[i][j];
				linha = i;
				coluna = j;
			}
		}
		printf("\n");
	}
	printf("O maior n�mero � %d e est� na posicao [%d,%d]",maior, linha, coluna);
}
