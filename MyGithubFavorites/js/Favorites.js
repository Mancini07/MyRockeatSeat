export class Favorites{
    constructor(root){
        this.root = document.querySelector(root)
        this.load()
    }
    load(){
        this.entries = [{
            login: "Mancini07",
            name: "ClóvisMancini",
            public_repos: "19",
            followers: '195'
        },
        {
            login: "bob",
            name: "Bob",
            public_repos: "19",
            followers: '195'
        }]
    }
    delete(user){
        const findFilter = this.entries.filter(users=>users.login !== user.login)
        this.entries = findFilter
        this.update()
    }
}

export class FavoritesView extends Favorites{
    constructor(root){
        super(root)
        this.tbody = this.root.querySelector("table tbody")
        this.update()

    }

    update(){
        this.removeAllTr()
        this.entries.forEach((user)=>{
            const row = this.createRow()
            row.querySelector(".user img").src = `https://github.com/${user.login}.png`
            row.querySelector(".user a").src = `https://github.com/${user.login}`
            row.querySelector(".user a p").textContent = `${user.name}`
            row.querySelector(".user a span").textContent = `${user.login}`
            row.querySelector(".Repositories").textContent = `${user.public_repos}`
            row.querySelector(".Followers").textContent = `${user.followers}`
            row.querySelector(".Remover").onclick = ()=>{
                const isOk = confirm('Tem certeza que deseja Excluir?')
                if(isOk){
                    this.delete(user)
                }
            }
            this.tbody.append(row)
        })
    }
    createRow(){
        const tr = document.createElement('tr')
        tr.innerHTML = 
    ` 
    <tr>
        <td class="user">
            <img src="https://github.com/Mancini07.png" alt="imagem Mancini07">
            <a href="https://github.com/Mancini07">
                <p>Clóvis Mancini</p>
                <span>/Mancini07</span>
            </a>
        </td>

        <td class="Repositories">
            123
        </td>
        <td class="Followers">
            1234
        </td>
        <td>
            <a class="Remover">Remover</a>
        </td>
    </tr>`
        return tr
    }

    removeAllTr(){
        this.tbody.querySelectorAll('tr').forEach((tr)=>{
            tr.remove()
        })
    }

}