
export class GithubUser{
    static search(username){
        const endpoint = `https://api.github.com/users/${username}`
        return fetch(endpoint).then(data=>data.json()).then(({login,name, public_repos, followers})=>({
            login,
            name,
            public_repos,
            followers
        }))

    }
}

export class Favorites {
    constructor(root){
        this.root = document.querySelector(root)
        this.load()
        
    }
    load(){
        this.entries = JSON.parse(localStorage.getItem('@github-favorites:')) || []
    }
    save(){
        localStorage.setItem('@github-favorites:',JSON.stringify(this.entries))
    }
    delete(user){
        const filterEntries = this.entries.filter(entry => entry.login !== user.login)
        this.entries = filterEntries
        this.update()
        this.save()
    }
    async add(username){
        try {
            const userExists = this.entries.find(entries=>entries.login == username)
            if(userExists){
                throw new Error('Usuário já existe')
            }
            const user = await GithubUser.search(username)
            if(user.login === undefined){
                throw new Error("Usuário não encontrado")
            }
            this.entries = [user, ...this.entries] 
        } catch (error) {
            alert(error)
        }
        this.update()
        this.save()
    }
}

export class FavoritesView extends Favorites {
    constructor(root) {
        super(root)
        this.tbody = this.root.querySelector('table tbody')
        this.update()
        this.onadd()
        
        
        
    }

    update(){
        this.removeAllTr()
        this.entries.forEach((user)=>{
            const row = this.createRow()
            row.querySelector('.user img').src = `https://github.com/${user.login}.png`
            row.querySelector('.user').alt = `imagem ${user.login}`
            row.querySelector('.user a').href = `https://github.com/${user.login}`
            row.querySelector('.user p').textContent = `${user.name}`
            row.querySelector('.user span').textContent = `${user.login}`
            row.querySelector('.repositories').textContent = `${user.public_repos}`
            row.querySelector('.followers').textContent = `${user.followers}`
            row.querySelector('.remove').onclick = ()=>{
                const isOk = confirm("Tem certeza que deseja excluir está linha")
                if(isOk){
                    this.delete(user)
                }
            }
            this.tbody.append(row)
        })
    }

    onadd(){
        const addButton = this.root.querySelector('.search button')
        addButton.onclick = ()=>{
            const{value} = this.root.querySelector('.search input')
            this.add(value)
        }
    }

    createRow(){
        const tr = document.createElement('tr')
        tr.innerHTML = 
        `<td class="user">
            <img src="" alt="">
            <a href="">
                <p></p>
                <span></span>
            </a>
        </td>
        <td class="repositories">
        </td>
        <td class="followers">
        </td>
        <td>
            <button class="remove">&times;</button>
        </td>`
        return tr
    }

    removeAllTr(){
        
        this.tbody.querySelectorAll('tr').forEach((tr)=>{tr.remove()})
    }
}