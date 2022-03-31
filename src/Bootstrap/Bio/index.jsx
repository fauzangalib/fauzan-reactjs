import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import { Table } from "react-bootstrap";

export default class Bio extends React.Component{
    render(){
        return(
        <div className="container text-center" id="bio">
            <h3 className="fs-bold fs-2">My Bio</h3>
            <p className="fs-6 fst-italic fw-light">
                Saya Fauzan Galib lahir di Majalengka, saya merupakan keturunan Sunda dan Padang. Saya sangat senang bisa belajar di Eduwork. Meskipun kemampuan saya belom seperti yang lainnya. Namun, saya berusaha untuk bisa dan mengejar mimpi saya menjadi programer.
            </p>
            <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-12">
                    <h6 className="fs-5">Kegiatan</h6>
                    <p className="fw-light"> 
                        <h6>Tinggi 164 Cm </h6> <br />
                        <h6>Berat Badan 52 Kg </h6> <br />
                        <h6>Wajah Bulat </h6> <br />
                    </p>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12">
                    <h6 className="fs-5">Deskripsi</h6>
                    <p className="fw-light">
                        <h6>Tinggi 164 Cm </h6> <br />
                        <h6>Berat Badan 52 Kg </h6> <br />
                        <h6>Wajah Bulat </h6> <br />
                        <h6>Rambut Lurus </h6> <br />
                        <h6 >Kulit Putih </h6> <br />
                    </p>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12">
                    <h6 className="fs-5">Riwayat Pendidikan</h6>
                        <Table bordered hover border="1px" cellSpacing="0" cellPadding="3" >
                            <thead>
                                <tr>
                                    <th>Pendidikan</th>
                                    <th>Sekolah</th>
                                    <th>Angkatan</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th>SD</th>
                                    <th>SDN Haurngombong 1</th>
                                    <th>2011</th>
                                </tr>
                                <tr>
                                    <th>SMP</th>
                                    <th>SMPN Tanjungsari</th>
                                    <th>2017</th>
                                </tr>
                                <tr>
                                    <th>SMA</th>
                                    <th>SMAN Tanjungsari</th>
                                    <th>2020</th>
                                </tr>
                            </tbody>
                        </Table>
                </div>
            </div>
        </div>
        )
    }
}
