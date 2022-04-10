import { Form } from 'antd'
import React, { useCallback, useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import CustomLayout from '../../../layouts'
import beatUpdateThunk from '../../../state_management/thunks/beat/beat.update.thunk'
import urls from '../../../utils/routes/page.routes'
import BeatBasicForm from './forms/BeatBasicForm'

const BeatUpdate = () => {
  const [form] = Form.useForm()
  const dispatch = useDispatch()
  const beatState = useSelector( state => state.beat.list)
  const params = useParams()
  const navigate = useNavigate()
  const selectedBeat = useMemo(() => {
    return beatState.filter( beat => beat.key === params.ID)
  }, [beatState, params.ID])

  const fillForm = useCallback(() => {
    form.setFieldsValue({...selectedBeat[0], general_price:selectedBeat[0].general.price, exclusive_price: selectedBeat[0].exclusive.price})
  }, [form, selectedBeat])

  const onFinish = values => {
    dispatch(beatUpdateThunk({key: params.ID,  ...values}))
    .unwrap().then(success => {navigate(urls.dashboard_beat_list)})
  }

  useEffect(() => {
    fillForm()
  })
  return (
    <CustomLayout admin>
      <BeatBasicForm updateForm label='Update Beat Form' form={form} onFinish={onFinish} />
    </CustomLayout>
  )
}

export default BeatUpdate