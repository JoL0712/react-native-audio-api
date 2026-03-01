'use strict';

// Optional semver: when used as a file: dependency, semver may not be installed.
let semverPrerelease;
try {
  semverPrerelease = require('semver/functions/prerelease');
} catch (_) {
  semverPrerelease = (v) => (v && typeof v === 'string' && v.includes('-')) || false;
}

const validWorkletsVersions = ['0.6.0', '0.6.1', '0.7.0', '0.7.1'];

function validateVersion() {
  let workletsVersion;
  try {
    const { version } = require('react-native-worklets/package.json');
    workletsVersion = version;
  } catch (e) {
    return false;
  }
  if (semverPrerelease(workletsVersion)) {
    return true;
  }

  return validWorkletsVersions.includes(workletsVersion);
}

if (!validateVersion()) {
  console.warn(
    '[RNAudioApi] Incompatible version of react-native-audio-worklets detected. Please install a compatible version if you want to use worklet nodes in react-native-audio-api.'
  );
  process.exit(1);
}
