import React, { Component } from "react";
import {
  Button,
  Icon,
  Label,
  Segment,
  Header,
  Divider
} from "semantic-ui-react";
import Form from "../../../reusable/Formsy/Form";

const questionOptions = [
  { key: "checkbox", text: "Pilihan", value: "checkbox" },
  { key: "radio", text: "Pilihan Ganda", value: "radio" },
  { key: "text", text: "Isian", value: "text" }
];

class MasterQuestionnaireAdd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questionType: null,
      checkChoicesCount: 1,
      radioChoicesCount: 1
    };

    this.handleChangeQuestionType = this.handleChangeQuestionType.bind(this);
    this.questionType = this.questionType.bind(this);
    this.handleAddQuestion = this.handleAddQuestion.bind(this);
    this.handleDeleteQuestion = this.handleDeleteQuestion.bind(this);
  }

  onValidSubmit = formData => {
    console.log(formData);
  };

  handleChangeQuestionType(event, data) {
    console.log(data);

    if (data.value === "checkbox") {
      this.setState({
        questionType: data.value,
        radioChoicesCount: 0
      });
    } else {
      this.setState({
        questionType: data.value,
        checkChoicesCount: 0
      });
    }
  }

  handleAddQuestion(type) {
    if (type === "check") {
      this.setState({
        checkChoicesCount: this.state.checkChoicesCount + 1
      });
    } else {
      this.setState({
        radioChoicesCount: this.state.radioChoicesCount + 1
      });
    }
  }

  handleDeleteQuestion(type) {
    if (type === "check") {
      this.setState({
        checkChoicesCount: this.state.checkChoicesCount - 1
      });
    } else {
      this.setState({
        radioChoicesCount: this.state.radioChoicesCount - 1
      });
    }
  }

  questionType() {
    const { questionType, checkChoicesCount, radioChoicesCount } = this.state;

    if (questionType === "checkbox") {
      let checkChoices = [];

      for (let i = 0; i < checkChoicesCount; i++) {
        checkChoices.push(
          <Form.Input
            // required
            name={`checkQuestion ${i}`}
            label={`Nama Pertanyaan ke ${i + 1}`}
            placeholder="Nama Pertanyaan"
            // validations="isWords"
            errorLabel={<Label color="red" pointing />}
            // validationErrors={{
            //   isWords: "No numbers or special characters allowed",
            //   isDefaultRequiredValue: "First Name is Required"
            // }}
          />
        );
      }

      return (
        <div>
          {checkChoices}
          <Form.Group>
            <Form.Button
              onClick={() => this.handleAddQuestion("check")}
              type="button"
              content="Submit"
              color="green"
            >
              Tambah Pertanyaan
            </Form.Button>
            {checkChoicesCount > 0 && (
              <Form.Button
                onClick={() => this.handleDeleteQuestion("check")}
                type="button"
                content="Submit"
              >
                Kurangi Pertanyaan
              </Form.Button>
            )}
          </Form.Group>
        </div>
      );
    } else if (questionType === "radio") {
      let radioChoices = [];

      for (let i = 0; i < radioChoicesCount; i++) {
        radioChoices.push(
          <Form.Input
            // required
            name={`radioQuestion ${i}`}
            label={`Nama Pertanyaan ke ${i + 1}`}
            placeholder="Nama Pertanyaan"
            // validations="isWords"
            errorLabel={<Label color="red" pointing />}
            // validationErrors={{
            //   isWords: "No numbers or special characters allowed",
            //   isDefaultRequiredValue: "First Name is Required"
            // }}
          />
        );
      }

      return (
        <div>
          {radioChoices}
          <Form.Group>
            <Form.Button
              onClick={() => this.handleAddQuestion("radio")}
              type="button"
              content="Submit"
              color="green"
            >
              Tambah Pertanyaan
            </Form.Button>
            {checkChoicesCount > 0 && (
              <Form.Button
                onClick={() => this.handleDeleteQuestion("radio")}
                type="button"
                content="Submit"
              >
                Kurangi Pertanyaan
              </Form.Button>
            )}
          </Form.Group>
        </div>
      );
    }
  }

  render() {
    const { questionType } = this.state;
    console.log(questionType);

    return (
      <Segment>
        <Header size="large">Master Data Kuisioner</Header>
        <Divider />
        <Form ref={ref => (this.form = ref)} onValidSubmit={this.onValidSubmit}>
          <Form.Input
            // required
            name="question_name"
            label="Nama Pertanyaan"
            placeholder="Nama Pertanyaan"
            // validations="isWords"
            errorLabel={<Label color="red" pointing />}
            // validationErrors={{
            //   isWords: "No numbers or special characters allowed",
            //   isDefaultRequiredValue: "First Name is Required"
            // }}
          />
          <Form.Input
            // required
            name="description"
            label="Deskripsi"
            placeholder="Deskripsi"
            // validations="isWords"
            errorLabel={<Label color="red" pointing />}
            // validationErrors={{
            //   isWords: "No numbers or special characters allowed",
            //   isDefaultRequiredValue: "First Name is Required"
            // }}
          />
          <Form.Input
            // required
            name="question_group_name"
            label="Nama Grup Pertanyaan"
            placeholder="Nama Grup Pertanyaan"
            // validations="isWords"
            errorLabel={<Label color="red" pointing />}
            // validationErrors={{
            //   isWords: "No numbers or special characters allowed",
            //   isDefaultRequiredValue: "First Name is Required"
            // }}
          />
          <Form.Input
            // required
            name="question_group_code"
            label="Kode Grup Pertanyaan"
            placeholder="Kode Grup Pertanyaan"
            // validations="isWords"
            errorLabel={<Label color="red" pointing />}
            // validationErrors={{
            //   isWords: "No numbers or special characters allowed",
            //   isDefaultRequiredValue: "First Name is Required"
            // }}
          />

          <Form.Select
            selection
            label="Pilih Jenis Pertanyaan"
            name="question_type"
            onChange={this.handleChangeQuestionType}
            options={questionOptions}
            placeholder="Jenis Pertanyaan"
          />

          <Divider />
          {this.questionType()}

          <Form.Field>
            <Button primary type="submit">
              Submit
            </Button>
          </Form.Field>
        </Form>
      </Segment>
    );
  }
}

export default MasterQuestionnaireAdd;
