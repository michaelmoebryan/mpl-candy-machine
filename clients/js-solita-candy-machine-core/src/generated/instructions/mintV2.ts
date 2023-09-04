/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as beet from '@metaplex-foundation/beet';
import * as web3 from '@solana/web3.js';

/**
 * @category Instructions
 * @category MintV2
 * @category generated
 */
export const mintV2Struct = new beet.BeetArgsStruct<{
  instructionDiscriminator: number[] /* size: 8 */;
}>([['instructionDiscriminator', beet.uniformFixedSizeArray(beet.u8, 8)]], 'MintV2InstructionArgs');
/**
 * Accounts required by the _mintV2_ instruction
 *
 * @property [_writable_] candyMachine
 * @property [_writable_] authorityPda
 * @property [**signer**] mintAuthority
 * @property [_writable_, **signer**] payer
 * @property [] nftOwner
 * @property [_writable_] nftMint
 * @property [**signer**] nftMintAuthority
 * @property [_writable_] nftMetadata
 * @property [_writable_] nftMasterEdition
 * @property [_writable_] token (optional)
 * @property [_writable_] tokenRecord (optional)
 * @property [] collectionDelegateRecord
 * @property [] collectionMint
 * @property [_writable_] collectionMetadata
 * @property [] collectionMasterEdition
 * @property [] collectionUpdateAuthority
 * @property [] tokenMetadataProgram
 * @property [] splTokenProgram
 * @property [] splAtaProgram (optional)
 * @property [] sysvarInstructions
 * @property [] recentSlothashes
 * @property [] authorizationRulesProgram (optional)
 * @property [] authorizationRules (optional)
 * @category Instructions
 * @category MintV2
 * @category generated
 */
export type MintV2InstructionAccounts = {
  candyMachine: web3.PublicKey;
  authorityPda: web3.PublicKey;
  mintAuthority: web3.PublicKey;
  payer: web3.PublicKey;
  nftOwner: web3.PublicKey;
  nftMint: web3.PublicKey;
  nftMintAuthority: web3.PublicKey;
  nftMetadata: web3.PublicKey;
  nftMasterEdition: web3.PublicKey;
  token?: web3.PublicKey;
  tokenRecord?: web3.PublicKey;
  collectionDelegateRecord: web3.PublicKey;
  collectionMint: web3.PublicKey;
  collectionMetadata: web3.PublicKey;
  collectionMasterEdition: web3.PublicKey;
  collectionUpdateAuthority: web3.PublicKey;
  tokenMetadataProgram: web3.PublicKey;
  splTokenProgram: web3.PublicKey;
  splAtaProgram?: web3.PublicKey;
  systemProgram?: web3.PublicKey;
  sysvarInstructions: web3.PublicKey;
  recentSlothashes: web3.PublicKey;
  authorizationRulesProgram?: web3.PublicKey;
  authorizationRules?: web3.PublicKey;
  anchorRemainingAccounts?: web3.AccountMeta[];
};

export const mintV2InstructionDiscriminator = [120, 121, 23, 146, 173, 110, 199, 205];

/**
 * Creates a _MintV2_ instruction.
 *
 * Optional accounts that are not provided default to the program ID since
 * this was indicated in the IDL from which this instruction was generated.
 *
 * @param accounts that will be accessed while the instruction is processed
 * @category Instructions
 * @category MintV2
 * @category generated
 */
export function createMintV2Instruction(
  accounts: MintV2InstructionAccounts,
  programId = new web3.PublicKey('8MTRsiiN9Sc8eEiG7NM1qxQpoDUXLLRGwq8nzG3tbdwF'),
) {
  const [data] = mintV2Struct.serialize({
    instructionDiscriminator: mintV2InstructionDiscriminator,
  });
  const keys: web3.AccountMeta[] = [
    {
      pubkey: accounts.candyMachine,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.authorityPda,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.mintAuthority,
      isWritable: false,
      isSigner: true,
    },
    {
      pubkey: accounts.payer,
      isWritable: true,
      isSigner: true,
    },
    {
      pubkey: accounts.nftOwner,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.nftMint,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.nftMintAuthority,
      isWritable: false,
      isSigner: true,
    },
    {
      pubkey: accounts.nftMetadata,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.nftMasterEdition,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.token ?? programId,
      isWritable: accounts.token != null,
      isSigner: false,
    },
    {
      pubkey: accounts.tokenRecord ?? programId,
      isWritable: accounts.tokenRecord != null,
      isSigner: false,
    },
    {
      pubkey: accounts.collectionDelegateRecord,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.collectionMint,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.collectionMetadata,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.collectionMasterEdition,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.collectionUpdateAuthority,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.tokenMetadataProgram,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.splTokenProgram,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.splAtaProgram ?? programId,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.systemProgram ?? web3.SystemProgram.programId,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.sysvarInstructions,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.recentSlothashes,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.authorizationRulesProgram ?? programId,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.authorizationRules ?? programId,
      isWritable: false,
      isSigner: false,
    },
  ];

  if (accounts.anchorRemainingAccounts != null) {
    for (const acc of accounts.anchorRemainingAccounts) {
      keys.push(acc);
    }
  }

  const ix = new web3.TransactionInstruction({
    programId,
    keys,
    data,
  });
  return ix;
}
