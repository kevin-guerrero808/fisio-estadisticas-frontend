export default {
    getMunicipalities: async () => {
        return await fetch('https://www.datos.gov.co/resource/xdk5-pm3f.json', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                throw Error();
            }
        });
    }
}