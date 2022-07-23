import { useEffect, useState } from 'react';
import { action, useDsp, useSlc, RootState } from 'app/store';
import { apiFaq } from 'app/api';
import { dtoFaq } from 'app/utils/dto';
import Scrollbar from 'components/scrollbar';
import Accordion from 'react-bootstrap/Accordion';
import { LoaderMini } from 'components/loader';

const WrapperFaq = () => {
  const dispatch = useDsp();
  const [accAction, setAccAction] = useState([]);
  const [isLoaderActive, setLoaderActive] = useState(true)

  const faq = useSlc((state: RootState) => state.faq);

  const apiSuccess = (docs: any) => {
    dispatch(action.faqSet(dtoFaq(docs)))
    setLoaderActive(false)
  }

  const apiUnsuccess = () => {
    dispatch(action.faqSet([]))
    setLoaderActive(false)
  }

  const scrollbarUpdate = () => {
    setTimeout(()=>setAccAction([]), 1000)
  }

  useEffect(() => {
    apiFaq(apiSuccess, apiUnsuccess)
  }, [])

  return (
    <>
      {
        !isLoaderActive &&
        <Scrollbar>
          <Accordion defaultActiveKey="0">
            {
              faq.map((faqItem: any, i: number) => {
                return(
                  <Accordion.Item eventKey={`${i}`} key={i}>
                    <Accordion.Header onClick={scrollbarUpdate}>
                      {faqItem.question}
                    </Accordion.Header>
                    <Accordion.Body>{faqItem.answer}</Accordion.Body>
                  </Accordion.Item>
                )
              })
            }
          </Accordion>
        </Scrollbar>
      }
      {
        isLoaderActive && <LoaderMini/>
      }
    </>
  )
}

export default WrapperFaq;