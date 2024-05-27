const BASE_URL = 'https://projeto-api-eventos.vercel.app';

// Função para formatar a data no formato DD/MM/YYYY
function formatarData(data) {
	const dataObj = new Date(data);
	const dia = String(dataObj.getUTCDate()).padStart(2, '0');
	const mes = String(dataObj.getUTCMonth() + 1).padStart(2, '0');
	const ano = dataObj.getUTCFullYear();
	return `${dia}/${mes}/${ano}`;
}

fetch(`${BASE_URL}/eventos`)
	.then((response) => response.json())
	.then((eventos) => {
		const tbody = document.querySelector('tbody');
		eventos.forEach((evento) => {
			const row = document.createElement('tr');
			row.innerHTML = `
                <td>${evento.titulo}</td>
                <td>${evento.descricao}</td>
                <td>${formatarData(
									evento.data
								)}</td> // Formata a data antes de exibi-la na tabela
                <td>${evento.local}</td>
            `;
			tbody.appendChild(row);
		});
	});
