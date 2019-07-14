import React, { Component } from "react";
import { Segment, Header, Divider, Button, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { Table } from "semantic-ui-react";

class MasterQuestionnaire extends Component {
  render() {
    return (
      <Segment>
        <Header size="large">Master Data Kuisioner</Header>
        <Divider />
        <Link to="/masterquestionnaire/add">
          <Button primary icon>
            <Icon name="square add" /> Tambah Kuisioner
          </Button>
        </Link>
        <Table striped>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Nama Pertanyaan</Table.HeaderCell>
              <Table.HeaderCell>Deskripsi</Table.HeaderCell>
              <Table.HeaderCell>Jenis Pertanyaan</Table.HeaderCell>
              <Table.HeaderCell>Nama Grup Pertanyaan</Table.HeaderCell>
              <Table.HeaderCell>Kode Grup Pertanyaan</Table.HeaderCell>
              <Table.HeaderCell>Isi Pilihan</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            <Table.Row verticalAlign="middle">
              <Table.Cell>Siapakah Nama Anda</Table.Cell>
              <Table.Cell>Isi Nama Asli anda</Table.Cell>
              <Table.Cell>Pilihan Ganda</Table.Cell>
              <Table.Cell>Biodata</Table.Cell>
              <Table.Cell>01</Table.Cell>
              <Table.Cell verticalAlign="top">
                Udin
                <br />
                Udin
                <br />
                Udin
                <br />
              </Table.Cell>
            </Table.Row>

            <Table.Row verticalAlign="middle">
              <Table.Cell>Berapa Umur Anda</Table.Cell>
              <Table.Cell>Isi Umur Anda</Table.Cell>
              <Table.Cell>Isian</Table.Cell>
              <Table.Cell>Biodata</Table.Cell>
              <Table.Cell>01</Table.Cell>
              <Table.Cell verticalAlign="top">-</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </Segment>
    );
  }
}

export default MasterQuestionnaire;
