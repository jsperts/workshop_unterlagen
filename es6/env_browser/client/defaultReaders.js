import {
  READ_INFO_TEXT,
  READ_TODOS_TO_SHOW,
} from './readerTypes'

const defaultReaders = {
  [READ_INFO_TEXT]: (state) => {
    return ''
  },
  [READ_TODOS_TO_SHOW]: (state) => {
    return []
  },
}

export default defaultReaders
