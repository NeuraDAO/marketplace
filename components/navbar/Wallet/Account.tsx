import React, { FormEvent } from "react";
import Caret from "@images/caret.svg";
import { accountTruncate } from "@utils/web3";
import Loader from "@shared/atoms/Loader";
import styles from "./Account.module.css";
import { useWeb3 } from "@context/Web3";
import Blockies from "@shared/atoms/Blockies";
import { Button, Text } from "@chakra-ui/react";

// Forward ref for Tippy.js
// eslint-disable-next-line
const Account = React.forwardRef((props, ref: any) => {
  const { accountId, accountEns, web3Modal, connect } = useWeb3();

  async function handleActivation(e: FormEvent<HTMLButtonElement>) {
    // prevent accidentially submitting a form the button might be in
    e.preventDefault();

    await connect();
  }

  return accountId ? (
    <Button
      bg="brand.800"
      aria-label="Account"
      ref={ref}
      onClick={(e) => e.preventDefault()}
    >
      <Blockies accountId={accountId} />
      <span className={styles.address} title={accountId}>
        {accountTruncate(accountEns || accountId)}
      </span>
      <Caret aria-hidden="true" className={styles.caret} />
    </Button>
  ) : (
    <Button
      bg="brand.800"
      onClick={(e) => handleActivation(e)}
      // Need the `ref` here although we do not want
      // the Tippy to show in this state.
      ref={ref}
    >
      <Text display="block"> Connect Wallet </Text>
    </Button>
  );
});

export default Account;
