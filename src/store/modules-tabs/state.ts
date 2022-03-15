export interface TabsStateInterface {
    preferenceState: string,
}

function state(): TabsStateInterface {
  return {
    preferenceState: 'mails',
  };
}

export default state;
