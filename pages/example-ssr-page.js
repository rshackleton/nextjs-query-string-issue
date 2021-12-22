import * as React from 'react';

const PageComponent = (props) => {
  return (
    <div>
      <pre>
        {JSON.stringify(props, null, 2)}
      </pre>
    </div>
  )
}

const getServerSideProps = async (context) => {
  return {
    props: {
      query: context.query
    }
  }
}

export { PageComponent as default, getServerSideProps };
