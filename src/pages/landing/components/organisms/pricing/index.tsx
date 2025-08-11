import { Check, Download, ExternalLink } from 'lucide-react';
import { Button } from '@/shared/ui/atoms/Button';
import { pricingPlans } from './data';
import type { TButtonVariant } from '@/shared/ui/atoms/Button';
import { Typography } from '@/shared/ui';

export default function Pricing() {
  return (
    <div>
      <div className="mb-12 flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <Typography variant="h1" className="text-white">
            Inversión
          </Typography>
          <Typography variant="h4" className="font-normal text-white">
            Elige el plan que mejor se adapte a tus necesidades
          </Typography>
        </div>
      </div>
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-6 md:grid-cols-3">
        {pricingPlans.map((plan) => {
          const isPro = plan.key === 'pro';
          return (
            <div
              key={plan.key}
              className={`${plan.containerClass} rounded-2xl border border-white/10 transition-all duration-300 hover:-translate-y-1`}
              style={
                isPro
                  ? { position: 'relative', overflow: 'hidden', border: 0 }
                  : {}
              }
            >
              {plan.gradientClass && <div className={plan.gradientClass} />}
              <div className={plan.innerClass || ''}>
                <div className="p-4">
                  <Typography variant="body1" className="text-white">
                    {plan.title}
                  </Typography>
                  <div className="mb-6 flex items-baseline gap-1">
                    <span className={plan.priceClass}>{plan.price}</span>
                    {plan.priceNote && (
                      <span className={plan.priceNoteClass}>
                        {plan.priceNote}
                      </span>
                    )}
                  </div>
                  <Typography variant="body1" className={plan.descriptionClass}>
                    {plan.description}
                  </Typography>
                </div>
                <div className="space-y-4 p-4">
                  <div className="mb-8 space-y-3">
                    {plan.features.map((feature, idx) => (
                      <div className="flex items-center gap-3" key={idx}>
                        <Check className={`h-4 w-4 ${feature.iconColor}`} />
                        <span className="text-sm">{feature.text}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    {plan.actions.map((action, idx) => {
                      if (action.type === 'button') {
                        const { leftIcon, children, variant, ...btnProps } =
                          action.props;
                        let leftIconNode = null;
                        if (leftIcon === 'download')
                          leftIconNode = <Download className="h-4 w-4" />;
                        if (leftIcon === 'external')
                          leftIconNode = <ExternalLink className="h-4 w-4" />;
                        let content = children;
                        let rightIconNode = null;
                        if (
                          Array.isArray(children) &&
                          children[1] === 'external'
                        ) {
                          content = children[0];
                          rightIconNode = <ExternalLink className="h-4 w-4" />;
                        }
                        const allowedVariants: TButtonVariant[] = [
                          'primary',
                          'secondary',
                          'outline',
                          'ghost',
                          'input',
                          'landing',
                          'danger',
                        ];
                        const variantProp = allowedVariants.includes(
                          variant as TButtonVariant,
                        )
                          ? (variant as TButtonVariant)
                          : undefined;
                        return (
                          <Button
                            key={idx}
                            leftIcon={leftIconNode}
                            rightIcon={rightIconNode}
                            {...(variantProp ? { variant: variantProp } : {})}
                            {...btnProps}
                          >
                            {content}
                          </Button>
                        );
                      }
                      return null;
                    })}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
