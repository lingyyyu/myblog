import Link from 'next/link';
import { ReactElement, JSXElementConstructor, ReactFragment, MouseEventHandler } from 'react';
import { UrlObject } from 'url';

import classes from './button.module.css';

function Button(props: { link?: string | UrlObject; children?: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment; onClick?: MouseEventHandler<HTMLButtonElement>; }) {
  if (props.link) {
    return (
      <Link href={props.link}>
        <a className={classes.btn}>{props.children}</a>
      </Link>
    );
  }

  return (
    <button className={classes.btn} onClick={props.onClick}>
      {props.children}
    </button>
  );
}

export default Button;
