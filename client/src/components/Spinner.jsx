
/**
 * Renders a spinner component.
 *
 * @returns {JSX.Element} The spinner component.
 */

export default function Spinner() {
  return (
    <div className="d-flex justify-content-center">
        <div className="spinner-border" role="status">
            <span className="sr-only"></span>
        </div>
    </div>
  )
}
