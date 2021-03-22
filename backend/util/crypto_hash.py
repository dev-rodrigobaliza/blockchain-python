import hashlib
import json


def crypto_hash(*args):
    """
    Return a sha-256 hash of the given arguments.
    """
    stringified_args = sorted(map(lambda data: json.dumps(data), args))
    joined_data = ''.join(stringified_args)

    return hashlib.sha256(joined_data.encode('utf-8')).hexdigest()


def main():
    print(f"crypto_has(1, 'two', [3]): {crypto_hash(1, 'two', [3])}")
    print(f"crypto_has('two', 1, [3]): {crypto_hash('two', 1, [3])}")


if __name__ == '__main__':
    main()
