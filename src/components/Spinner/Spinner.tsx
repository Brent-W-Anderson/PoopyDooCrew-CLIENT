import { JSX } from 'react'
import styles from './Spinner.module.scss'
import * as Spinners from 'react-spinners'

const spinnerColor = '#333'

const spinnerComponents = {
    CircleSpinner: Spinners.CircleLoader,
    ClimbingBoxSpinner: Spinners.ClimbingBoxLoader,
    ClipSpinner: Spinners.ClipLoader,
    DotSpinner: Spinners.DotLoader,
    FadeSpinner: Spinners.FadeLoader,
    GridSpinner: Spinners.GridLoader,
    HashSpinner: Spinners.HashLoader,
    MoonSpinner: Spinners.MoonLoader,
    PacmanSpinner: Spinners.PacmanLoader,
    PropagateSpinner: Spinners.PropagateLoader,
    PuffSpinner: Spinners.PuffLoader,
    PulseSpinner: Spinners.PulseLoader,
    RingSpinner: Spinners.RingLoader,
    RiseSpinner: Spinners.RiseLoader,
    RotateSpinner: Spinners.RotateLoader,
    ScaleSpinner: Spinners.ScaleLoader,
    SkewSpinner: Spinners.SkewLoader,
    SquareSpinner: Spinners.SquareLoader,
    SyncSpinner: Spinners.SyncLoader
}

export const SpinnersCollection = Object.entries( spinnerComponents ).reduce(
    ( acc, [key, Component] ) => {
        acc[key] = () => (
            <div className={styles.spinnerContainer}>
                <Component color={spinnerColor} />
            </div>
        )
        return acc
    },
  {} as Record<string, () => JSX.Element>
)

export const {
    CircleSpinner,
    ClimbingBoxSpinner,
    ClipSpinner,
    DotSpinner,
    FadeSpinner,
    GridSpinner,
    HashSpinner,
    MoonSpinner,
    PacmanSpinner,
    PropagateSpinner,
    PuffSpinner,
    PulseSpinner,
    RingSpinner,
    RiseSpinner,
    RotateSpinner,
    ScaleSpinner,
    SkewSpinner,
    SquareSpinner,
    SyncSpinner
} = SpinnersCollection