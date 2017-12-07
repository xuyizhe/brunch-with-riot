app
  p { props.title }

  script(type="text/typescript").
    interface AppProps {
      readonly title: string;
    };

    const props:AppProps = {
      title: "Brunch with Riot"
    };

    this.props = props;
