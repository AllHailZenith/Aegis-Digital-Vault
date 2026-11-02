"use strict";

class InvalidKeyError extends Error {
    constructor(message) {
        super(message);
        this.name = "InvalidKeyError";
    }
}

class VaultLockedError extends Error {
    constructor(message) {
        super(message);
        this.name = "VaultLockedError";
    }
}

function accessVault(key) {
    if (key === undefined || Number.isNaN(key)) {
        throw new InvalidKeyError("Key is missing or corrupted");
    }

    if (key === "SECRET_123") {
        return "Access Granted";
    }

    throw new VaultLockedError("Incorrect key provided");
}

function attemptEntry(key) {
    try {
        console.log(accessVault(key));
    } catch (e) {
        if (e instanceof InvalidKeyError) {
            console.log("Security Alert: System corruption detected.");
        } else if (e instanceof VaultLockedError) {
            console.log("User Error: Please try again.");
        } else {
            throw e;
        }
    } finally {
        console.log("Vault attempt completed.");
    }
}

function testAccess() {
    try {
        return accessVault("SECRET_123") === "Access Granted";
    } catch (e) {
        return false;
    }
}

function testInvalidKey() {
    try {
        accessVault(undefined);
        return false;
    } catch (e) {
        return e instanceof InvalidKeyError;
    }
}

function testNaNKey() {
    try {
        accessVault(NaN);
        return false;
    } catch (e) {
        return e instanceof InvalidKeyError;
    }
}

function testWrongKey() {
    try {
        accessVault("wrong");
        return false;
    } catch (e) {
        return e instanceof VaultLockedError;
    }
}

function runTest(name, test) {
    if (test()) {
        console.log(name + ": Passed");
    } else {
        console.log(name + ": Failed");
    }
}

runTest("Correct key", testAccess);
runTest("Undefined key", testInvalidKey);
runTest("NaN key", testNaNKey);
runTest("Wrong key", testWrongKey);

attemptEntry("SECRET_123");
attemptEntry("wrong");
attemptEntry(undefined);