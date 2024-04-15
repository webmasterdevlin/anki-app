export function stripNorskWordForHint(answer: string) {
  if (answer.startsWith('å ')) {
    return answer.substring(0, 4).toLocaleLowerCase();
  } else if (
    answer.startsWith('en ') ||
    answer.startsWith('én ') ||
    answer.startsWith('ei ') ||
    answer.startsWith('éi ') ||
    answer.startsWith('et ')
  ) {
    return answer.substring(0, 5).toLocaleLowerCase();
  } else if (answer.startsWith('ett ') || answer.startsWith('har ')) {
    return answer.substring(0, 6).toLocaleLowerCase();
  } else {
    return answer.substring(0, 2).toLocaleLowerCase();
  }
}

export function stripEnglishWordForHint(answer: string) {
  if (answer.startsWith('to ') || answer.startsWith('an ')) {
    return answer.substring(0, 5).toLocaleLowerCase();
  } else if (answer.startsWith('a ')) {
    return answer.substring(0, 4).toLocaleLowerCase();
  } else {
    return answer.substring(0, 2).toLocaleLowerCase();
  }
}
