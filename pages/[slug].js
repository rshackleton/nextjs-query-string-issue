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

const getStaticProps = async (context) => {
  return {
    props: {
      query: 'getStaticProps page, no query string.'
    }
  }
}

const getStaticPaths = async (context) => {
  return {
    fallback: 'blocking',
    paths: [],
  };
};

export { PageComponent as default, getStaticProps, getStaticPaths };
