import { useState } from 'react'
import { Box, Heading, Input, Button, useToast } from 'native-base'
import { useMutation } from '@apollo/client';
import { ADD_NEW_QUESTION_MUTATION } from '../src/Query'
import { Dimensions } from 'react-native';

const AddNewModal = ({ value, setVal, closeModal }) => {

  const [addNewQuestion, { loading, error }] = useMutation(ADD_NEW_QUESTION_MUTATION)
  const width = Dimensions.get('screen').width;
  const [question, setQuestion] = useState('');
  const toast = useToast();

  const handleOptionChange = (val, key) => {
    const data = [...value];
    data[key].text = val;
    setVal(data);

  }
  const handleNewOption = () => {
    if (value.length > 5) {
      return;
    }
    setVal((prev) => [...prev, { text: '' }])
  }

  const handleSubmit = async () => {

    const option_data = value.filter((item) => item.text !== '');

    if (!question || option_data.length < 2) {
      return
    }

    const result = await addNewQuestion({
      variables: {
        title: question,
        options: option_data
      }
    })
    console.log(result.options + "soru eklendi")
    closeModal()
    toast.show({
      title: 'Question added !',
      placement: 'top',
      status: 'success'
    })
  }



  return (
    <Box p={6} flex={1} backgroundColor={'#ddd'}>
      <Heading mb={2}>Questions</Heading>
      <Input
        placeholder='Enter a new question...'
        fontSize={20}
        borderColor='#686565'
        value={question}
        onChangeText={(text) => setQuestion(text)}
      ></Input>


      <Heading mt={6} mb={2}>Options</Heading>
      {
        value.map((item, key) => (
          <Input
            mb={2}
            placeholder='Enter a new question...'
            fontSize={20}
            borderColor='#686565'
            key={key}
            value={item.text}
            onChangeText={(val) => handleOptionChange(val, key)}
          ></Input>
        ))
      }

      <Box mt={3}>
        <Button.Group size='lg' justifyContent={'flex-end'}>
          <Button colorScheme={'coolGray'} onPress={handleNewOption}>New Option</Button>
        </Button.Group>
      </Box>

      <Box position={'absolute'} bottom={0} width={width}>
        <Button borderRadius={0} padding={3} onPress={handleSubmit} isLoading={loading}>Save</Button>
      </Box>
    </Box>
  )
}

export default AddNewModal