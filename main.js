const nome = document.getElementById('name');
 
fetch(`https://ergast.com/api/f1/2022/driverStandings.json`).then(resposta => {
        return resposta.json();
        }).then(data => {
                const datas = data.MRData.StandingsTable.StandingsLists[0].DriverStandings
                       
                var AdicionarLinha = "";
                const newDatas = datas.map((user) => {
                        AdicionarLinha += `<tr class="table-row">`;
                        AdicionarLinha += `<td class="table-data">` + "#" + user.position + `</td>`;
                        AdicionarLinha += `<td class="table-data">` + user.Driver.familyName + `</td>`;
                        AdicionarLinha += `<td class="table-data">` + user.Constructors[0].name + `</td>`;
                        AdicionarLinha += `<td class="table-data">` + user.points + `</td>`;

                        document.getElementById('name').innerHTML = AdicionarLinha;        
                })
        })

const DarkModeOptions = {
        bottom: 'unset',
        right: '32px',
        left: 'unset',
        time: '0.4s',
        mixColor: '#fff',
        backgroundColor: '#fff',
        buttonColorDark: '#000',
        buttonColorLight: '#fff',
        saveInCookies: true,
        label: '🌓',
        autoMatchOsTheme: true
}

const darkmode = new Darkmode(DarkModeOptions);
darkmode.showWidget();
