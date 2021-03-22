function Transaction({ transaction }) {
    const { input, output } = transaction;
    const recipients = Object.keys(output);

    return (
        <div className="Transaction">
            <div>From: {input.address}</div>
            {
                recipients.map(recipient => (
                    <div key={recipient}>
                        <br />
                        <div>To: {recipient}</div>
                        <div>Sent: {output[recipient]}</div>
                    </div>
                ))
            }
        </div>
    )
};

export default Transaction;