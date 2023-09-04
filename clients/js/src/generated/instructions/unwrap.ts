/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */

import {
  Context,
  Pda,
  PublicKey,
  Signer,
  TransactionBuilder,
  transactionBuilder,
} from '@metaplex-foundation/umi';
import {
  Serializer,
  array,
  mapSerializer,
  struct,
  u8,
} from '@metaplex-foundation/umi/serializers';
import {
  ResolvedAccount,
  ResolvedAccountsWithIndices,
  getAccountMetasAndSigners,
} from '../shared';

// Accounts.
export type UnwrapInstructionAccounts = {
  candyGuard: PublicKey | Pda;
  authority?: Signer;
  candyMachine: PublicKey | Pda;
  candyMachineAuthority?: Signer;
  candyMachineProgram?: PublicKey | Pda;
};

// Data.
export type UnwrapInstructionData = { discriminator: Array<number> };

export type UnwrapInstructionDataArgs = {};

export function getUnwrapInstructionDataSerializer(): Serializer<
  UnwrapInstructionDataArgs,
  UnwrapInstructionData
> {
  return mapSerializer<UnwrapInstructionDataArgs, any, UnwrapInstructionData>(
    struct<UnwrapInstructionData>(
      [['discriminator', array(u8(), { size: 8 })]],
      { description: 'UnwrapInstructionData' }
    ),
    (value) => ({
      ...value,
      discriminator: [126, 175, 198, 14, 212, 69, 50, 44],
    })
  ) as Serializer<UnwrapInstructionDataArgs, UnwrapInstructionData>;
}

// Instruction.
export function unwrap(
  context: Pick<Context, 'identity' | 'programs'>,
  input: UnwrapInstructionAccounts
): TransactionBuilder {
  // Program ID.
  const programId = context.programs.getPublicKey(
    'mplCandyGuard',
    '6aFdZ1MGb5b8rXpBpPXe3SKr3zxY84JRWWoA3jeAzaZF'
  );

  // Accounts.
  const resolvedAccounts: ResolvedAccountsWithIndices = {
    candyGuard: {
      index: 0,
      isWritable: false,
      value: input.candyGuard ?? null,
    },
    authority: { index: 1, isWritable: false, value: input.authority ?? null },
    candyMachine: {
      index: 2,
      isWritable: true,
      value: input.candyMachine ?? null,
    },
    candyMachineAuthority: {
      index: 3,
      isWritable: false,
      value: input.candyMachineAuthority ?? null,
    },
    candyMachineProgram: {
      index: 4,
      isWritable: false,
      value: input.candyMachineProgram ?? null,
    },
  };

  // Default values.
  if (!resolvedAccounts.authority.value) {
    resolvedAccounts.authority.value = context.identity;
  }
  if (!resolvedAccounts.candyMachineAuthority.value) {
    resolvedAccounts.candyMachineAuthority.value = context.identity;
  }
  if (!resolvedAccounts.candyMachineProgram.value) {
    resolvedAccounts.candyMachineProgram.value = context.programs.getPublicKey(
      'mplCandyMachine',
      '8MTRsiiN9Sc8eEiG7NM1qxQpoDUXLLRGwq8nzG3tbdwF'
    );
    resolvedAccounts.candyMachineProgram.isWritable = false;
  }

  // Accounts in order.
  const orderedAccounts: ResolvedAccount[] = Object.values(
    resolvedAccounts
  ).sort((a, b) => a.index - b.index);

  // Keys and Signers.
  const [keys, signers] = getAccountMetasAndSigners(
    orderedAccounts,
    'programId',
    programId
  );

  // Data.
  const data = getUnwrapInstructionDataSerializer().serialize({});

  // Bytes Created On Chain.
  const bytesCreatedOnChain = 0;

  return transactionBuilder([
    { instruction: { keys, programId, data }, signers, bytesCreatedOnChain },
  ]);
}
