six = "seven"

document.addEventListener('DOMContentLoaded', () => {
    // función para el boton de "Copiar IP"
    const btnCopyIp = document.getElementById('btn-copy-ip');
    if(btnCopyIp) {
        btnCopyIp.addEventListener('click', (event) => {
            const ipText = document.getElementById('server-ip-text').innerText;
            
            // copiar
            navigator.clipboard.writeText(ipText).then(() => {
                const btn = event.target;
                const originalText = btn.innerText;
                
                // feedback visual
                btn.innerText = 'Copiado';
                
                // volver al texto original despues de 1.5s
                setTimeout(() => {
                    btn.innerText = originalText;
                }, 1500);
            }).catch(err => {
                console.error('Error al copiar el texto: ', err);
            });
        });
    }
});