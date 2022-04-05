import React from "react";

const Input = ({label, type, name, onChange}) => {
    return(
        <div>
            <label>{label}:</label>
            <br />
            <input type={type} name={name} onChange={e => onChange(e.target.value)}/>
            <br />
        </div>
    )
}

const ShowErrors = ({errors}) => {
    return(
        <ul style={{color: 'red', marginLeft: '-20px'}}>
            {
                errors.map((errors, i) => <li key={i}>{errors}</li>)
            }
        </ul>
    )
}

class Validation extends React.Component{
    state = {
        email: '',
        password: '',
        nama: '',
        lahir: '',
        gender: '',
        alamat: '',
        jurusan: '',
        hp: '',
        kota: '',
        errors: []
    }

    handleSubmit = event => {
        event.preventDefault();
        const {email, password, nama, lahir, gender, alamat, jurusan, hp, kota} = this.state;

        let message = [];

        if(email.length === 0) {
            message = [...message, 'Email tidak boleh kosong'];

        }
        if(nama.length === 0) {
            message = [...message, 'Nama tidak boleh kosong'];

        }
        if(kota.length === 0) {
            message = [...message, 'Kota tidak boleh kosong'];

        }
        if(lahir.length === 0) {
            message = [...message, 'Lahir tidak boleh kosong'];

        }
        if(gender.length === 0) {
            message = [...message, 'Jenis Kelamin tidak boleh kosong'];

        }
        if(alamat.length === 0) {
            message = [...message, 'Alamat tidak boleh kosong'];

        }
        if(jurusan.length === 0) {
            message = [...message, 'Jurusan tidak boleh kosong'];

        }
        if(hp.length === 0) {
            message = [...message, 'Nomor HP tidak boleh kosong'];

        }
        if(password.length === 0) {
            message =[...message, 'Password tidak boleh kosong'];
            
        }

        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(!re.test(String(email).toLowerCase())) {
            message = [...message, 'Email tidak valid'];
        }
        if(password.length < 8){
            message = [...message, 'Password terlalu pendek'];
        }

        if(message.length > 0) {
        this.setState({
            errors: message
        }, () =>  console.log(this.state.errors));
    }else{
        alert(`
        nama: ${this.state.nama}
        jurusan: ${this.state.jurusan}
        gender: ${this.state.gender}
        alamat: ${this.state.alamat}
        email: ${this.state.email}
        password: ${this.state.password}
        lahir: ${this.state.lahir}
        hp: ${this.state.hp}
        kota: ${this.state.kota}
        
        `);

        this.setState({
            errors: []
        })
    }
}


    render(){
        const style = {
            width: '400px',
            margin: '100px auto 0',
            border: '1px solid black',
            padding: '10px'
        }
        return(
            <div style={style}>
                {this.state.errors && <ShowErrors errors={this.state.errors}/>}
                <h4>Formulir Pendaftaran</h4>
                <form onSubmit={this.handleSubmit}>
                    <Input type="text" name="nama" label="Nama"
                        onChange={value => this.setState({nama: value})} />
                    <Input type="date" name="lahir" label="Tanggal Lahir"
                        onChange={value => this.setState({lahir: value})} />
                    <label>
                        Jenis Kelamin: <br />
                        <input type="radio" value="Laki-Laki" name="gender" 
                        onChange={ e => this.setState({gender: e.target.value})}/> Laki - laki
                        <input type="radio" value="Perempuan" name="gender"
                        onChange={ e => this.setState({gender: e.target.value})}/> Perempuan
                    </label>
                    <Input type="text" name="jurusan" label="Jurusan"
                        onChange={value => this.setState({jurusan: value})} />
                    <Input type="text" name="email" label="Email" 
                        onChange={value => this.setState({email: value})} />
                    <Input type="password" name="password" label="Password" 
                        onChange={value => this.setState({password: value})} />
                    <Input type="number" name="hp" label="Nomor HP"
                        onChange={value => this.setState({hp: value})} />
                    <label>
                    Alamat: <textarea cols="30" rows="10" name="alamat" 
                    onChange={ e => this.setState({alamat: e.target.value})}/>
                    </label>
                    <Input type="text" name="kota" label="Kota"
                        onChange={value => this.setState({kota: value})} />
                    <br />
                    <button type="submit">Login</button>
                </form>

            </div>
        )
    }
}

export default Validation;