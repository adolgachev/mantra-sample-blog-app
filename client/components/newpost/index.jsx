import React from 'react';

const FormsyText = require('formsy-material-ui/lib/FormsyText');
const RaisedButton = require('material-ui/lib/raised-button');

class NewPost extends React.Component {
  render() {
    const {error} = this.props;
    return (
      <Formsy.Form
        onValid={this.enableButton}
        onInvalid={this.disableButton}
        onValidSubmit={this.submitForm.bind(this)}
      >
        <h2>Add New Post</h2>
        {error ? <p style={{color: 'red'}}>{error}</p> : null}

        <FormsyText ref="titleRef" name="title" floatingLabelText="Title" hintText="Enter your post title." fullWidth={true} />
        <FormsyText ref="contentRef" name="content" floatingLabelText="Content" hintText="Enter your post content." multiLine={true} rows={4} fullWidth={true} />

        <RaisedButton
          type="submit"
          label="Add New"
          disabled={!!error}
        />
      </Formsy.Form>
    );
  }
/*
  getInitialState() {
    return {
      canSubmit: false
    };
  }

  enableButton() {
    this.setState({
      canSubmit: true
    });
  }

  disableButton() {
    this.setState({
      canSubmit: false
    });
  }
           */
  submitForm(model) {
    const {create} = this.props;
    const {title, content} = model;

    create(title, content);
  }

}
                                            /*
const Form = React.createClass({

  render: function () {
    let { wordsError } = this.errorMessages;

    return (
      <Formsy.Form
        onValid={this.enableButton}
        onInvalid={this.disableButton}
        onValidSubmit={this.submitForm}
      >

        <FormsyText
          name='name'
          validations='isWords'
          validationError={wordsError}
          required
          hintText="What is your name?"
          value="Bob"
          floatingLabelText="Name"
        />

        <FormsySelect
          name='frequency'
          required
          floatingLabelText="How often?">
          <MenuItem value={'never'} primaryText="Never" />
          <MenuItem value={'nightly'} primaryText="Every Night" />
          <MenuItem value={'weeknights'} primaryText="Weeknights" />
        </FormsySelect>

        <FormsyDate
          name='date'
          required
          floatingLabelText="Date"
        />

        <FormsyTime
          name='time'
          required
          floatingLabelText="Time"
        />

        <FormsyCheckbox
          name='agree'
          label="Do you agree to disagree?"
          defaultChecked={true}
        />

        <FormsyToggle
          name='toggle'
          label="Toggle"
        />

        <FormsyRadioGroup name="shipSpeed" defaultSelected="not_light">
          <FormsyRadio
            value="light"
            label="prepare for light speed"
          />
          <FormsyRadio
            value="not_light"
            label="light speed too slow"
          />
          <FormsyRadio
            value="ludicrous"
            label="go to ludicrous speed"
            disabled={true}
          />
        </FormsyRadioGroup>

        <RaisedButton
          type="submit"
          label="Submit"
          disabled={!this.state.canSubmit}
        />
      </Formsy.Form>
    );
  }
});                     */

export default NewPost;
